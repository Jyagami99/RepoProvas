import userRepository from "../repositories/userRepository";
import { unauthorizedError } from "../utils/errorUtils";

async function findById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw unauthorizedError("Credenciais inválidas!");

  return user;
}

const userService = {
  findById,
};

export default userService;
