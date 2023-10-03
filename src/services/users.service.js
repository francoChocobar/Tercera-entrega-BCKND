import { usersDao } from "../dao";

export class usersService {
  static getUserByEmail = async (email) => {
    return await usersDao.getByEmail(email);
  };
  static saveUser = async () => {
    return await usersDao.save(newUser);
  };
  static getUserById = async () => {
    return await usersDao.getById(id);
  };
}
