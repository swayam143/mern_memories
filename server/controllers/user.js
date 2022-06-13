import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    //Checking User
    //
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    //Checking Password
    //
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    //Sending token if user log in successfully
    //

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "Swayam",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    //Checking User
    //
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User Already exist" });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords don't match " });

    //
    //PASSWORD HASHING
    //
    const hashPassword = await bcrypt.hash(password, 10);

    const result = await User.create({
      email,
      password: hashPassword,
      name: `${firstName} ${lastName}`,
    });

    //Sending token if user Sign up successfully
    //

    const token = jwt.sign({ email: result.email, id: result._id }, "Swayam", {
      expiresIn: "1h",
    });

    res.status(200).json({ result: result, token });
  } catch (error) {
    console.log(error);
  }
};
