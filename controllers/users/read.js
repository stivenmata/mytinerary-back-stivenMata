import User from "../../models/User.js";


let allUser = async (req, res, next) => {
  try {
    let { name, role } = req.query;
    let query = {};

    if (name) {
      query.name = { $regex: name, $options: "i" };
    }
    if (role) {
      query.role = role;
    }

    let all = await User.find(query).populate("car", "").exec();

    return res.status(200).json({
      success: true,
      response: all
    });
  } catch (error) {
    next(error);
  }
};

let userByName = async (req, res, next) => {
  try {
    let nameQuery = req.params.nameParams;
    let users = await User.find({ name: nameQuery });

    if (!users.length) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      response: users
    });
  } catch (error) {
    next(error);
  }
};

let userById = async (req, res, next) => {
  try {
    let idQuery = req.params.idParams;
    let user = await User.findById(idQuery);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      response: user
    });
  } catch (error) {
    next(error);
  }
};

export { allUser, userByName, userById };
