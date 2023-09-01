import { ModelStatic } from "sequelize/types/model";
import User from "../database/models/User";
import resp from "../utils/resp";
import md5 from "md5";
import { sign } from "../jwt/jwt";

class UserService {
  private model: ModelStatic<User> = User;

  async get() {
    const users = await this.model.findAll();
    return resp(200, users);
  }

  async login(body: { email: string; password: string }) {
    const hashPassword = md5(body.password);

    const user = await this.model.findOne({
      where: {
        email: body.email,
        password: hashPassword,
      },
    });

    if (!user) return resp(404, "User not found");

    const { id, email } = user;
    const token = sign({ id, email });
    return resp(200, {id, email, token});
  }
}

export default UserService;
