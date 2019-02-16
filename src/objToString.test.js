import objToString from './objToString';
import { snakeToKebab } from './parsers';

describe('objToString', () => {
  it('should be a function', () => {
    expect(objToString).toBeFunction();
  });

  it('should throw an error if not passed an object', () => {
    const test = arg => () => objToString(arg);
    expect(test()).toThrowError(TypeError);
    expect(test(1)).toThrowError(TypeError);
    expect(test('a')).toThrowError(TypeError);
    expect(test([])).toThrowError(TypeError);
    expect(test({})).not.toThrowError();
    expect(test(true)).toThrowError(TypeError);
    expect(test(null)).toThrowError(TypeError);
  });

  it('should return a string', () => {
    expect(objToString({})).toBeString();
  });

  it('should convert a style object without any cases issues to a style string', () => {
    const styleObj = { display: 'grid', color: '#bada55' };
    const test = objToString(styleObj);
    expect(test).toBe('display: grid;\ncolor: #bada55;');
  });

  it('should convert any properties in camelCase to kebab-case by default', () => {
    const styleObj = { fontSize: '1rem', backgroundColor: '#bada55' };
    const test = objToString(styleObj);
    expect(test).toBe('font-size: 1rem;\nbackground-color: #bada55;');
  });

  it('should accept an optional second argument for a parser', () => {
    const styleObj = { font_size: '1rem', background_color: '#bada55' };
    const test = objToString(styleObj, snakeToKebab);
    expect(test).toBe('font-size: 1rem;\nbackground-color: #bada55;');
  });
});
