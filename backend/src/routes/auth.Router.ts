import { Router } from "express";
import { signInController, signUpController } from "../controller";

const router = Router();

router.route("/signup").post(signUpController);
router.route("/signin").post(signInController);

export default router;
