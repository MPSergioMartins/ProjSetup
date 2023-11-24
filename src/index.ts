import express from "express";
import { config } from "dotenv";
config();

const app = express();

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get("/", (req, res) => {
  res.status(200).send("Homepage");
});
