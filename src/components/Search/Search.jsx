import "./search.css";

const Search = () => {
  return (
    <>
      <div className='search-container'>
        <div className='search-content'>
          <h2 className='search-heading'>
            Find your best restaurant in <span>Delhi, India</span>
          </h2>
          <input
            className='search-input'
            type='text'
            placeholder='Name of restaurant?'
          />
        </div>
      </div>
    </>
  );
};

export default Search;
