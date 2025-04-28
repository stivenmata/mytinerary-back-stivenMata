import bcryptjs from "bcryptjs";

export default (req, res, next) => {
  const passwordBody = req.body.password;
  const passwordDB = req.user.password;

  const isValid = bcryptjs.compareSync(passwordBody, passwordDB);

  if (isValid) {
    return next();
  }

  return res.status(400).json({
    success: false,
    message: "Invalid credentials",
  });
};
