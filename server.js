import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import connectDB from "./config/db.js";

// Load env vars
dotenv.config({ path: "./config/.env" });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello from the mock SMS server!",
  });
});

app.listen(process.env.PORT, () => {
  console.log(
    `Mock SMS server is listening at port ${process.env.PORT}`.cyan.italic,
  );
});
