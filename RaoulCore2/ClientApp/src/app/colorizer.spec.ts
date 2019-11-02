import { Colorizer } from './colorizer';

describe('Colorizer', () => {
  it('should create an instance', () => {
    let x = new Colorizer(0);
    expect( new Colorizer(50)).toBeTruthy();
    expect( x.percentile(10,100)).toBe(9);   
    expect( x.percentile(10,0)).toBe(0);    
    expect( x.percentile(10,150)).toBe(9);   
    expect( x.percentile(10,-10)).toBe(0);

    expect( x.percentile(10,1)).toBe(0); 
    expect( x.percentile(10,5)).toBe(1);   
    expect( x.percentile(10,44)).toBe(4);
    expect( x.percentile(10,45)).toBe(5);

    expect( x.percentile(5,50)).toBe(3, "5/50"); 
    expect( x.percentile(5,9)).toBe(0, "5/9");   
    expect( x.percentile(5,20)).toBe(1, "5/20");
    expect( x.percentile(5,70)).toBe(4, "5/70");

    expect( new Colorizer(0).color).toMatch("purple");
    expect( new Colorizer(101).color).toMatch("red");
    expect( new Colorizer(50).color).toMatch("green");
  });
});
