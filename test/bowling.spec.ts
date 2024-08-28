import { describe, it, expect } from "bun:test";
import { bowling } from "../src/bowling";

describe("bowling", () => {
  it("should return true", () => {
    expect(bowling()).toBe(false);
  });
});