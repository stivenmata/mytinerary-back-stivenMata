import City from "../../models/City.js";

const create = async (req, res, next) => {
  try {
    const newCity = await City.create(req.body);
    res.status(201).json({ success: true, data: newCity });
  } catch (error) {
    next(error); 
  }
};

const createMany = async (req, res, next) => {
  try {
    const cities = await City.insertMany(req.body);
    res.status(201).json({ success: true, data: cities });
  } catch (error) {
    next(error); 
  }
};

export default { create, createMany };
