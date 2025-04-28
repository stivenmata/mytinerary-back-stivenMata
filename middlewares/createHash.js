import bcryptjs from "bcryptjs";

export default (req, res, next) => {
  const { password } = req.body;
//Seguridad por si viene//
  if (!password) {
    return res.status(400).json({
      success: false,
      message: "Password is required"
    });
  }

  const hashPass = bcryptjs.hashSync(password, 10);
  req.body.password = hashPass;
  next();
};
