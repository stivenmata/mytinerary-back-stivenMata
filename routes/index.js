import express from "express";
import citiesRouter from "./city.routes.js";
import itinerariesRouter from "./itineraries.routes.js";
import authRouter from "./auth.routes.js"; 
import userRouter from "./users.routes.js";


const router = express.Router();

router.use("/cities", citiesRouter);
router.use("/itineraries", itinerariesRouter);
router.use("/auth", authRouter);     
router.use("/users", userRouter);    



export default router;
