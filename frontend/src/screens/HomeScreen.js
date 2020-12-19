import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4000");
      setMessage(data);
    };
    fetchData();
  });
  return <div>{message}</div>;
};

export default HomeScreen;
