import { Router } from "express";
import {
  getTrailers,
  createTrailer,
  UpdateTrailer,
  DeleteTrailer,
  getTrailer,
} from "../controller/Trailer.js";
const router = Router();

router.get("/trailer", getTrailers);
router.post("/trailer", createTrailer);
router.put("/trailer/:id", UpdateTrailer);
router.delete("/trailer/:id", DeleteTrailer);
router.get("/trailer/:id", getTrailer);
export default router;
