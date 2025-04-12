import { Router } from "express";
import createController from "../controllers/itineraries/create.js";
import getController from "../controllers/itineraries/read.js";
import updateController from "../controllers/itineraries/update.js";
import like from "../controllers/itineraries/like.js";
import removeController from "../controllers/itineraries/delete.js";

const router = Router();

router.post("/", createController.create);
router.post("/many", createController.createMany);
router.get("/", getController.getAll);
router.get("/:id", getController.getById);
router.get("/city/:cityId", getController.getByCity);
router.put("/:id", updateController.update);
router.put("/like/:id", like); 
router.delete("/:id", removeController.remove);

export default router;
