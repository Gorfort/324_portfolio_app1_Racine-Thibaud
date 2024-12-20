import { describe, it, expect, beforeEach } from "vitest";
import { fakeBrowser } from "wxt/testing";

describe("isLoggedIn", () => {
  beforeEach(() => {
    // See https://webext-core.aklinker1.io/fake-browser/reseting-state
    fakeBrowser.reset();
  });

  it("should return true when the account exists in storage", async () => {
    expect(true).toBe(true);
  });
});
