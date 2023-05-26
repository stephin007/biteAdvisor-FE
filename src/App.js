import { useState, useEffect } from "react";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

import "./App.css";
import { Header, Banner, Search } from "./components";

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const restaurantDetailsRef = collection(db, "details");

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      const data = await getDocs(restaurantDetailsRef);
      setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(reviews);
      console.log(loading);
      setLoading(false);
    };

    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='container'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <Banner />
        <div className='content-container'>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default App;
