import express from "express";
import {
  LoginUser,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
// router object
const router = express.Router();

// routing

// REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN || METHOD POST
router.post("/login", LoginUser);
export default router;

// test route
router.get("/test", requireSignIn, isAdmin, testController);
