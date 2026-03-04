import { Router } from "express";
import { authJwt } from "../middlewares/authJwt.js";
import { SolicitudesController } from "../controllers/solicitudes.controller.js";

const router = Router();

router.post("/", authJwt, SolicitudesController.crear);
router.get("/me", authJwt, SolicitudesController.misSolicitudes);

export default router;
