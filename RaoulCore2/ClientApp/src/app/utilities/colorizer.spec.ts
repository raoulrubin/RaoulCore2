import { Colorizer } from './colorizer';

describe('Colorizer', () => {
  it('should pick the right color', () => {
    expect( new Colorizer(null).color).toBe("gray");
    expect( new Colorizer(100).color).toBe("red");
    expect( new Colorizer(70).color).toBe("lightgreen");
    expect( new Colorizer(32).color).toBe("blue");
    expect( new Colorizer(-10).color).toBe("purple");
    });
});
