import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Photosimple");
});

app.listen(4000, () => {
  console.log("backend listening");
});