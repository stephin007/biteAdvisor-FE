import "./App.css";
import { Header, Banner, Search } from "./components";

const App = () => {
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
