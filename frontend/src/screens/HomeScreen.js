import React, { useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import SampleImages from "../components/SampleImages";
import axios from "axios";

const HomeScreen = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      // const { data } = await axios.get("https://photosimple.com/api/message");
      const { data } = await axios.get("http://localhost:4000/api/message");
      setMessage(data);
    };
    fetchData();
  });

  return (
    <React.Fragment>
      <SampleImages />
    </React.Fragment>
  );
};

export default HomeScreen;
