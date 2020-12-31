import { greet } from "./greet";

describe('greet', () => {
  it('should inclue the name in the message', () => {
    const name = 'Warlito';
    expect(greet(name)).toContain(name);
  });
});