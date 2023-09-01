import e, { NextFunction, Request, Response } from "express";
import User from "../database/models/User";
import UserService from "../services/user.service";

class UserController {
  private service = new UserService();

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.get();
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.login(req.body);
      res.status(status).json(message);
    } catch (error) {
      next(e);
    }
  }
}

export default UserController;
