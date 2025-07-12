import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";
import { User } from "../modals/user.js";

export const isAuth = async (req, res, next) => {
  const token = req.headers.token;
  // console.log(token);

  if (!token)
    return res.status(401).json({
      message: "Please Login",
    });
  try {
    const decodedData = jwt.verify(token, process.env.Jwt_Sec);

    req.user = await User.findById(decodedData._id);

    next();
  } catch (error) {
    res.status(500).json({
      message: "Login First",
    });
  }
};

export const isAdmin = (req, res, next) => {
  try {
    if (req.user.role != "admin")
      return res.status(403).json({
        message: "You are not admin",
      });

    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// const authHeader = req.headers.authorization;

// if (!authHeader || !authHeader.startsWith("Bearer ")) {
//   return res.status(403).json({ message: "Please login" });
// }

// const token = authHeader.split(" ")[1];
