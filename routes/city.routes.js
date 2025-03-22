import express from "express";
import createController from "../controllers/cities/create.js";
import readController from "../controllers/cities/read.js";

const router = express.Router();

router.post("/", createController.create); // Crear una ciudad
router.post("/bulk", createController.createMany); // Cargar varias ciudades
router.get("/", readController.getAll); // Obtener todas las ciudades
router.get("/:id", readController.getById); // Obtener una ciudad por ID

export default router;
