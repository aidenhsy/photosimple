import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container className="my-4">
        <Route path="/" component={HomeScreen} exact />
      </Container>
    </BrowserRouter>
  );
};

export default App;
