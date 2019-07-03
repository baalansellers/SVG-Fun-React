import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactLogo from "../ReactLogo/ReactLogo";
import CircleLineDrawCSS from "../CircleLineDraw/CircleLineDrawCSS";
import CircleLineDrawPath from "../CircleLineDraw/CircleLineDrawPath";

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
              <Link to="/circle/css">Circle Css</Link>
            </li>
            <li>
              <Link to="/circle/path">Circle Path</Link>
            </li>
            <li>
              <Link to="/logo">Logo</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/circle/css" component={CircleLineDrawCSS} />
        <Route exact path="/circle/path" component={CircleLineDrawPath} />
        <Route path="/logo" component={ReactLogo} />
      </div>
    </Router>
  );
}

export default App;
