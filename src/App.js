import { useState, useEffect } from "react";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

import "./App.css";
import { Header, Banner, Card } from "./components";

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setsearchTerm] = useState("");

  const restaurantDetailsRef = collection(db, "details");

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      const data = await getDocs(restaurantDetailsRef);
      setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };

    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let filteredData = reviews;
  if (searchTerm) {
    filteredData = filteredData.filter((i) =>
      i["Name"].toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else if (searchTerm === "") {
    filteredData = reviews;
  }

  return (
    <div className='container'>
      <div className='header-container'>
        <Header />
        <a 
          href="https://github.com/stephin007/biteAdvisor-FE" 
          target="_blank" 
          rel="noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
      </div>
      <div className='main-container'>
        <Banner />
        <div className='content-container'>
          <div className='search-container'>
            <div className='search-content'>
              <h2 className='search-heading'>
                Find your best restaurant in <span>Delhi, India</span>
              </h2>
              <input
                className='search-input'
                type='text'
                placeholder='Name of restaurant?'
                onChange={(e) => setsearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className='master-card-container'>
            {loading ? (
              <>
                <div className='loader-container'>
                  <div className='loader'></div>
                </div>
              </>
            ) : (
              <>
                {filteredData.length === 0 ? (
                  <p className='no-review'>No reviews found 😕</p>
                ) : (
                  filteredData.map((review) => {
                    return (
                      <Card review={review} loading={loading} key={review.id} />
                    );
                  })
                )}
              </>
            )}
          </div>
          <div className='what-can-you-container'>
            <div className='what-can-you-heading'>
              <h2>What can you do on Bite Advisor?</h2>
            </div>
            <div className='what-can-you-do-search'>
              <div className='what-can-you-search-heading'>
                <i class='bx bx-search-alt what-can-you-logo'></i>
                <h3>Search</h3>
              </div>
              <div className='what-can-you-search-content'>
                <p>
                  Users can search for restaurants based on location, cuisine,
                  budget, and rating.
                </p>
              </div>
            </div>
            <div className='what-can-you-reviews'>
              <div className='what-can-you-reviews-heading'>
                <i class='bx bx-medal what-can-you-logo'></i>
                <h3>Reviews</h3>
              </div>
              <div className='what-can-you-reviews-content'>
                <p>Users can read reviews and ratings for restaurants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
