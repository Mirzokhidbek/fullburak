import { Request, Response } from "express";
import { T } from "../libs/types/common";
import Errors, { HTTPCode, Message } from "../libs/Errors";

const memberController: T = {};

memberController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log("Error, getLogin:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, getSignup:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberController;
