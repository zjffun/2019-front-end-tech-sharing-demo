import { fakeUserCount as fuc } from "../utils/user";

describe("user util", () => {
  it("fakeUserCount function", () => {
    expect(fuc(0)).toBe(0);
    expect(fuc(4)).toBe(8);
    expect(fuc(256)).toBe(2048);
  });
});
