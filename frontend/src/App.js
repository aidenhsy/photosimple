import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={HomeScreen} exact />
    </BrowserRouter>
  );
};

export default App;
