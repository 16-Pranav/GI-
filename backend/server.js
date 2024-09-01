import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
// rest object
const app = express();

// middlewares:
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);

// configure env
dotenv.config();

// DATABSE CONFIG
connectDB();

// rest api:
app.get("/", (req, res) => {
  res.send("<h1> Hello Ecommerce Website </h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgCyan.white);
});
