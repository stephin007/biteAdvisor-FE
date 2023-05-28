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
        </div>
      </div>
    </div>
  );
};

export default App;
