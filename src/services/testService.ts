import { CreateTestData } from "../types/createTestData";

interface Filter {
  groupBy: "discipline" | "teachers";
  teacher?: string;
  discipline?: string;
}

async function find(filter: Filter) {}

async function insert(createTestData: CreateTestData) {}

async function view(id: number) {}

const testService = { find, insert, view };

export default testService;
