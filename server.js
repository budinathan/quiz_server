import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";
import connect from "./database/connect.js";

const app = express();

//middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

//application port
const port = process.env.PORT || 5000;
connect();

//routes//
app.use("/api", router); //API//

app.get("/", (req, res) => {
  try {
    res.json("Get req");
  } catch (err) {
    console.log(err);
  }
});

//start server only when valid connection
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Connected to http://localhost:${port}`);
      });
    } catch (err) {
      console.log("cannot connect");
    }
  })
  .catch((err) => {
    console.log("invalid connection");
  });
