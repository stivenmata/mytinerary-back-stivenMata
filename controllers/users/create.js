import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser
    });
  } catch (error) {
    next(error);
  }
};
