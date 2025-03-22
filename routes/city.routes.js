import express from "express";
import createController from "../controllers/cities/create.js";
import readController from "../controllers/cities/read.js";

const router = express.Router();

router.post("/", createController.create); 
router.post("/bulk", createController.createMany); 
router.get("/", readController.getAll); 
router.get("/:id", readController.getById); 

export default router;
