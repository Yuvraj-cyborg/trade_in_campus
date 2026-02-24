import "dotenv/config";
import express from "express";
import logger from "./middleware/logger.js";
import connectToDB from "./utils/db.js";

import userRouter from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server started at 3000");
  connectToDB();
});
