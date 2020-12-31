import { compute } from "./compute";

describe('compute', () => {
  it('should return 0 if input negative', () => {
    expect(compute(-1)).toBe(0);
  });

  it('should return input + 1 if input >= 0', () => {
    expect(compute(0)).toBe(1);
  });
})
