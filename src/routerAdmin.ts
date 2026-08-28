import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

/** Admin BSSR Routes **/
routerAdmin.get("/", restaurantController.goHome);
routerAdmin.get("/login", restaurantController.getLogin);
routerAdmin.post("/login", restaurantController.processLogin);
routerAdmin.get("/signup", restaurantController.getSignup);
routerAdmin.post("/signup", restaurantController.processSignup);
routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

export default routerAdmin;
