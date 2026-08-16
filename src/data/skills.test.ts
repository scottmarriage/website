import { describe, expect, it } from "vitest";
import { skills, categoryLabels } from "./skills";

describe("skills data", () => {
  it("has a label for every category used by a skill", () => {
    for (const skill of skills) {
      expect(categoryLabels[skill.category]).toBeTruthy();
    }
  });

  it("has no duplicate skill names", () => {
    const names = skills.map((s) => s.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
