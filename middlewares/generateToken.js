import jwt from "jsonwebtoken";

export default (req, res, next) => {
  try {
    const token = jwt.sign(
      { email: req.user.email, id: req.user._id },
      process.env.SECRET,
      { expiresIn: "2d" } 
    );

    req.token = token;
    next();
  } catch (error) {
    next(error);
  }
};
