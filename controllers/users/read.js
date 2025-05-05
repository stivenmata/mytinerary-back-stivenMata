import User from "../../models/User.js";

// Obtener todos los usuarios con filtros opcionales por nombre y rol
const allUser = async (req, res, next) => {
  try {
    const { name, role } = req.query;
    let query = {};

    if (name) {
      query.name = { $regex: name, $options: "i" };
    }

    if (role) {
      query.role = role;
    }

    const users = await User.find(query); 

    return res.status(200).json({
      success: true,
      response: users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      response: error.message,
    });
  }
};

// Buscar usuarios por nombre exacto
const userByName = async (req, res, next) => {
  try {
    const nameQuery = req.params.nameParams;
    const users = await User.find({ name: nameQuery });

    if (!users.length) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      response: users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      response: error.message,
    });
  }
};

// Buscar usuario por ID
const userById = async (req, res, next) => {
  try {
    const idQuery = req.params.idParams;
    const user = await User.findById(idQuery);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      response: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      response: error.message,
    });
  }
};

export { allUser, userByName, userById };
