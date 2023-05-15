import { Router } from "express";
import * as controller from "../controllers/controller.js";

const router = Router();

//Questions Routes API
router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.insertQuestions);

router.route("/result").get(controller.getResult).post(controller.storeResult);

export default router;
