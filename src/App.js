import requests from "./api/requests";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";
import Footer from "./components/Footer";
import LandingPage from "./components/views/LandingPage/LandingPage";

function App() {
  return (
  //<Router>  
  <div className="App">
    <Nav />
    <Banner />
    
    <Row
      title="MY FAVORITE MOVIES"
      id="NO"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
     />

    <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
    <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />

    <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies} />
    <Row 
      title="Romance Movies" 
      id="RM" 
      fetchUrl={requests.fetchRomanceMovies} 
    />
    <Footer />
  </div>
  //</Router><Switch>
      //<Route exact path="/" component={LandingPage} />
      //<Route exact path="/login" component={LogingPage} />
      //<Route exact path="/register" component={RegisterPage} />
    //</Switch>

  );
}

export default App;
