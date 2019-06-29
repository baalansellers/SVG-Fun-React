import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Shape from "../Shape/Shape";
import ReactLogo from "../ReactLogo/ReactLogo";

function Home() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shape">Shape</Link>
            </li>
            <li>
              <Link to="/logo">Logo</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/shape" component={Shape} />
        <Route path="/logo" component={ReactLogo} />
      </div>
    </Router>
  );
}

export default App;
