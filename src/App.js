import "./App.css";
import { Header, Banner } from "./components";

const App = () => {
  return (
    <div className='container'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <Banner />
      </div>
    </div>
  );
};

export default App;
