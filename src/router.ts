import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

/** SPA User Routes **/
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);

export default router;
