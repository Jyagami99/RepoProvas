import userRepository from "../repositories/userRepository";
import { CreateUserData } from "../types/createUserData";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils";

import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

async function findById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw notFoundError("Usuário não encontrado! ");

  return user;
}

async function signUp(createUserData: CreateUserData) {
  const existingUser = await userRepository.findByEmail(createUserData.email);
  if (existingUser) throw conflictError("Email já cadastrado!");

  const SALT = 12;
  const hashedPassword = bcrypt.hashSync(createUserData.password, SALT);

  await userRepository.insert({ ...createUserData, password: hashedPassword });
}

async function signIn(loginData: CreateUserData) {
  const user = await getUserOrFall(loginData);
  const token = jwt.sign({ userId: user.id }, String(process.env.JWT_SECRET));

  return token;
}

async function getUserOrFall(loginData: CreateUserData) {
  const user = await userRepository.findByEmail(loginData.email);
  if (!user) throw unauthorizedError("Credenciais inválidas!");

  const isPasswordValid = bcrypt.compareSync(loginData.password, user.password);
  if (!isPasswordValid) throw unauthorizedError("Credenciais Inválidas!");

  return user;
}

const userService = {
  findById,
  signIn,
  signUp,
};

export default userService;
