import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopRatedPage from "./pages/TopRatedPage";
import "./App.css";
import TrendingPage from "./pages/TrendingPage";
import UpcomingPage from "./pages/UpcomingPage";
import TopNav from "./components/common/TopNav";

const App = () => {
  return (
    <div className="app">
      <TopNav />
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
