import { ModelStatic } from "sequelize/types/model";
import User from "../database/models/User";

class UserService {
    private model: ModelStatic<User> = User;

    async get() {
        const users = await this.model.findAll()
        return resp(200, users)
    }
}

export default UserService