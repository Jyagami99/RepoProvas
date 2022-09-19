import categoryRepository from "../repositories/categoryRepository";

async function findMany() {
  return categoryRepository.findMany();
}

async function getById(id: number) {
  return categoryRepository.getById(id);
}

const categoryService = { findMany, getById };

export default categoryService;
