import { describe, it, expect, beforeEach, vi } from "vitest";
import { authenticateWithMicrosoft } from "@/libs/apiAuth";
import { getTasksFile } from "@/libs/apiTasks";
import { createTable } from "@/libs/tableTasks";

import "./main"; // Import your main.ts file

describe("main.ts", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="connectionOffice"></div>
      <div id="content"></div>
    `;
    vi.clearAllMocks(); // Clear mocks before each test
  });

  it("displays a connection warning when authentication fails", async () => {
    // Mock the authentication function to throw an error
    vi.mocked(authenticateWithMicrosoft).mockRejectedValue(
      new Error("Auth failed")
    );

    // Simulate DOMContentLoaded
    const event = new Event("DOMContentLoaded");
    document.dispatchEvent(event);

    const connectionOffice = document.getElementById("connectionOffice");
    expect(connectionOffice).not.toBeNull();
    expect(connectionOffice!.style.display).toBe("block");
    expect(connectionOffice!.textContent).toContain(
      "Merci de vous connecter sur"
    );
  });

  it("fetches and displays tasks when authenticated", async () => {
    // Mock authentication to return a token
    vi.mocked(authenticateWithMicrosoft).mockResolvedValue("mocked-token");

    // Mock fetching tasks
    vi.mocked(getTasksFile).mockResolvedValue({
      tasks: [{ id: 1, name: "Test Task", completed: false }],
    });

    // Mock table creation
    const mockTable = document.createElement("table");
    vi.mocked(createTable).mockReturnValue(mockTable);

    // Simulate DOMContentLoaded
    const event = new Event("DOMContentLoaded");
    document.dispatchEvent(event);

    const content = document.getElementById("content");
    expect(content).not.toBeNull();
    expect(content!.firstChild).toBe(mockTable); // Verify table is appended
  });

  it("reloads the page after successful login via the link", async () => {
    // Mock authentication to return a new token
    vi.mocked(authenticateWithMicrosoft).mockResolvedValue("new-token");

    // Mock window.location.reload
    const reloadSpy = vi
      .spyOn(window.location, "reload")
      .mockImplementation(() => {});

    // Simulate DOMContentLoaded
    const event = new Event("DOMContentLoaded");
    document.dispatchEvent(event);

    const connectionOffice = document.getElementById("connectionOffice")!;
    const link = connectionOffice.querySelector("a")!;
    link.dispatchEvent(
      new MouseEvent("click", { bubbles: true, cancelable: true })
    );

    expect(authenticateWithMicrosoft).toHaveBeenCalledWith(
      expect.any(String),
      true
    );
    expect(reloadSpy).toHaveBeenCalled();

    reloadSpy.mockRestore(); // Clean up the spy
  });
});
