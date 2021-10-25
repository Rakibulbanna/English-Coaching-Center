// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Course from './Component/Course/Course'
import Mentor from './Component/Mentor/Mentor'
import NotFound from './Component/NotFound/Notfound';
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
// import Mentors from './Component/Mentors/Mentors';
import Header from './Component/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>


      <Router>

        <div className="menu-link text-center w-100 p-3 m-10">
          <NavLink exact style={{ color: "white", textDecoration: "none", margin: "40px" }} to="/home">Home</NavLink>
          <NavLink exact style={{ color: "white", textDecoration: "none", margin: "40px" }} to="/about">About</NavLink>
          <NavLink exact style={{ color: "white", textDecoration: "none", margin: "40px" }} to="/course">Course/Services</NavLink>
          <NavLink exact style={{ color: "white", textDecoration: "none", margin: "40px" }} to="/mentor">Mentor</NavLink>
        </div>


        <Switch>
          <Route exact path="/">
            <About></About>

          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/course">
            <Course></Course>
          </Route>
          <Route exact path="/mentor">
            <Mentor></Mentor>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>

          </Route>
        </Switch>
      </Router>
      {/* <Course></Course>
      <Mentor></Mentor>
      <NotFound></NotFound>
      <Footer></Footer> */}
      <div>
        <Footer></Footer>

      </div>
    </div>
  );
}

export default App;
