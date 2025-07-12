import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./databese/db.js";
import Razorpay from "razorpay";
import cors from "cors";

dotenv.config();

export const instance = new Razorpay({
  key_id: process.env.Razorpay_key,
  key_secret: process.env.Razorpay_secret,
});

const app = express();

app.use(express.json());
app.use(cors());

const Port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.use("/uploads", express.static("uploads"));

//importing routes
import userRoutes from "./routes/user.js";
import coursesRoute from "./routes/courses.js";
import adminRoute from "./routes/admin.js";
import chatRoute from "./routes/chat.js";

//using routes
app.use("/api", userRoutes);
app.use("/api", coursesRoute);
app.use("/api", adminRoute);
app.use("/api/chat", chatRoute);

app.listen(Port, () => {
  console.log(`Server is running on port : ${Port}`);
  connectDb();
});
