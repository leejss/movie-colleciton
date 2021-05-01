import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopRatedPage from "./pages/TopRatedPage";
// import Sidebar from "./components/Sidebar";

const App = () => {
  console.log("App");
  return (
    <>
      {/* <Sidebar /> */}
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/top-rated" component={TopRatedPage} />
      </Switch>
    </>
  );
};

export default App;
