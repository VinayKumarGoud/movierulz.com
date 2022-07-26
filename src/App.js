import React from "react"
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./components/Home";
import Navbar from "./components/Navbar";


import Movie1 from "./movies/Movie1";
import Movie2 from "./movies/Movie2";
import Movie3 from "./movies/Movie3";
import Movie5 from "./movies/Movie5";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/movie5">
            <Navbar />
            <Movie5 />
          </Route>
        <Route path="/movie3">
            <Navbar />
            <Movie3 />
          </Route>

        <Route path="/movie2">
            <Navbar />
            <Movie2 />
          </Route>
          <Route path="/movie1">
            <Navbar />
            <Movie1 />
          </Route>


          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
