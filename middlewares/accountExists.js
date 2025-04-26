import User from "../models/User.js";

export default async (req, res, next) => {
  try {
    const account = await User.findOne({ email: req.body.email });
    if (account) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};
