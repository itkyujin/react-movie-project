import { Outlet, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import LandingPage from "./components/views/LandingPage/LandingPage";


const Layout = () => {
  return(
    <div>
      <Nav />

      <Outlet />

      <Footer />

    </div>
  )
}




function App() {
  return (
  //<Router>  
  <div className="App">
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<MainPage />} />
        <Route path=":movieId" element={<DetailPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
    </Routes>
  </div>
  //</Router><Switch>
      //<Route exact path="/" component={LandingPage} />
      //<Route exact path="/login" component={LogingPage} />
      //<Route exact path="/register" component={RegisterPage} />
    //</Switch>

  );
}

export default App;
