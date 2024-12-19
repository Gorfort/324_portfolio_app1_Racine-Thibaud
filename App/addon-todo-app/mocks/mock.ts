import { vi } from "vitest";

// Mocked functions
export const mockAuthenticateWithMicrosoft = vi.fn();
export const mockGetTasksFile = vi.fn();
export const mockCreateTable = vi.fn();

// Mock the modules
vi.mock("@/libs/apiAuth", () => ({
  authenticateWithMicrosoft: mockAuthenticateWithMicrosoft,
}));

vi.mock("@/libs/apiTasks", () => ({
  getTasksFile: mockGetTasksFile,
}));

vi.mock("@/libs/tableTasks", () => ({
  createTable: mockCreateTable,
}));
