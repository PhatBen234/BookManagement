import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/route.js"; 
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome to MERN stack");
});

app.use("/api", router);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongo connected...");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
