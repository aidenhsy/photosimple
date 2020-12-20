import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://photosimple.com/api/message");
      setMessage(data);
    };
    fetchData();
  });
  return <div>{message}</div>;
};

export default HomeScreen;
