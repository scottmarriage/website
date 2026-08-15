import { describe, expect, it } from "vitest";
import { runCommand, NAV_COMMANDS } from "./terminalCommands";

describe("runCommand", () => {
  it("lists commands for help", () => {
    expect(runCommand("help")).toContain("Available commands");
  });

  it("is case-insensitive and trims whitespace", () => {
    expect(runCommand("  WHOAMI  ")).toBe(runCommand("whoami"));
  });

  it("returns a friendly message for unknown commands, never a raw error", () => {
    const result = runCommand("rm -rf /");
    expect(result).toContain("command not found");
    expect(result).toContain("help");
  });

  it("returns an honest message for resume, no fake download link", () => {
    expect(runCommand("resume")).not.toMatch(/\.pdf/);
    expect(runCommand("resume")).toContain("not published yet");
  });

  it("exposes a nav target for every command that should redirect", () => {
    for (const [cmd, path] of Object.entries(NAV_COMMANDS)) {
      expect(runCommand(cmd)).toContain(path);
    }
  });
});
