import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json()); // for getting body data
app.get("/healthcheck", (req, res) => {
  res.send("working route");
});

// routes

import authRouter from "./routes/auth.Router";

app.use("/user", authRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
