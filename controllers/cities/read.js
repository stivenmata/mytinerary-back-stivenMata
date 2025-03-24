import City from "../../models/City.js";

const getAll = async (req, res, next) => {
  try {
    const cities = await City.find();
    res.status(200).json({ success: true, data: cities });
  } catch (error) {
    next(error); 
  }
};

const getById = async (req, res, next) => {
  try {
    const city = await City.findById(req.params.id);
    if (!city) {
      return res.status(404).json({ success: false, message: "City not found" });
    }
    res.status(200).json({ success: true, data: city });
  } catch (error) {
    next(error); 
  }
};

export default { getAll, getById };
