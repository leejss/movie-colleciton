import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopRatedPage from "./pages/TopRatedPage";
import Sidebar from "./components/Sidebar";
import "./App.css";
import TrendingPage from "./pages/TrendingPage";
import UpcomingPage from "./pages/UpcomingPage";

const App = () => {
  return (
    <div className="app">
      {/* <Sidebar /> */}
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/top-rated" component={TopRatedPage} />
        <Route path="/trending" component={TrendingPage} />
        <Route path="/upcoming" component={UpcomingPage} />
      </Switch>
    </div>
  );
};

export default App;
