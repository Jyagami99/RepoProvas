import userRepository from "../repositories/userRepository";
import { CreateUserData } from "../types/createUserData";
import { unauthorizedError } from "../utils/errorUtils";

async function findById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw unauthorizedError("Credenciais inválidas!");

  return user;
}

async function signUp(createUserData: CreateUserData) {}

async function signIn(loginData: CreateUserData) {}

async function getUserOrFall(loginData: CreateUserData) {}

const userService = {
  findById,
  signIn,
  signUp,
};

export default userService;
