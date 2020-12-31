import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
  it('should return the supported currencies', () => {
    expect(getCurrencies()).toContain('USD');
    expect(getCurrencies()).toContain('AUD');
    expect(getCurrencies()).toContain('EUR');
  });
})
