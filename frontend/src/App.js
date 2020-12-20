import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={HomeScreen} exact />
    </BrowserRouter>
  );
};

export default App;
