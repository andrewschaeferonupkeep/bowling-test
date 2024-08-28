import { describe, test, expect } from "bun:test";
import { bowling } from "../src/bowling";

test("should return true", () => {
  expect(bowling()).toBe(false);
});