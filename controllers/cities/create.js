import City from "../../models/City.js";

const create = async (req, res) => {
  try {
    const newCity = await City.create(req.body);
    res.status(201).json({ success: true, data: newCity });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const createMany = async (req, res) => {
  try {
    const cities = await City.insertMany(req.body);
    res.status(201).json({ success: true, data: cities });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export default { create, createMany };
