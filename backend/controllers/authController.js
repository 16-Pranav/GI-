// import { hashPhone } from "../helpers/authHelper.js";
import { compare } from "bcrypt";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
import { comparePhone } from "../helpers/authHelper.js";
// REGISTER NEW USER
export const registerController = async (req, res) => {
  try {
    const { name, phone } = req.body;

    if (!name || !phone) {
      return res.status(400).send({
        success: false,
        message: "Please enter all the fields",
      });
    }

    console.log(typeof phone);
    // Ensure phone is a string
    const phoneString = phone.toString();
    console.log(typeof phoneString);
    // Validate phone number format
    if (!/^\d{10}$/.test(phoneString)) {
      return res.status(400).send({
        success: false,
        message: "Phone number must be exactly 10 digits",
      });
    }

    // Find and Check for Existing user:
    const existingUser = await userModel.findOne({ phone: phone });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User already exists",
      });
    }

    // Register User
    const newUser = await new userModel({
      name,
      phone,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      newUser,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).send({
        success: false,
        message: error.message,
      });
    } else {
      console.error(error);
      return res.status(500).send({
        success: false,
        message: "An error occurred while registering the user",
      });
    }
  }
};

// LOGIN THE EXISTING USER || METHOD POST
export const LoginUser = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).send({
        success: false,
        message: "Please enter Phone Nmber",
      });
    }

    // Check user:
    const existingUser = await userModel.findOne({ phone });
    if (!existingUser) {
      return res.status(400).send({
        success: false,
        message: "User not found",
      });
    }
    //   Match Phone Numbers from entered and the ine in database
    const match = await comparePhone(phone, existingUser.phone);
    if (!match) {
      return res.status(400).send({
        success: false,
        message: "Invalid Phone Number",
      });
    }
      // Generate Token using JWT
      const token = await JWT.sign({ _id: existingUser._id }, process.env.JWT_TOKEN, {
        expiresIn: "1d",
      });
    
      //   Return token to the user
      res.status(200).send({
        success: true,
        message: "Login Successful",
        user: {
          name: existingUser.name,
          phone: existingUser.phone,
          role: existingUser.role,
        },
        token,
      });
    
    // Display ERROR IF FAILED PROCESS
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

// TEst controller:
export const testController = (req, res) => {
  res.send("Protected route");
};
