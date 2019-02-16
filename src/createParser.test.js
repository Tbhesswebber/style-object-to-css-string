import createParser from './createParser';

describe('createParser', () => {
  it('should be a function', () => {
    expect(createParser).toBeFunction();
  });

  it('should return a function', () => {
    expect(createParser()).toBeFunction();
  });

  describe('returned function', () => {
    it('should throw an error if not passed a string', () => {
      const parser = createParser();
      const catcher = arg => () => parser(arg);
      expect(catcher()).toThrowError(TypeError);
      expect(catcher({})).toThrowError(TypeError);
      expect(catcher([])).toThrowError(TypeError);
      expect(catcher(1)).toThrowError(TypeError);
      expect(catcher(true)).toThrowError(TypeError);
      expect(catcher(null)).toThrowError(TypeError);
      expect(catcher('')).not.toThrowError();
    });

    it('should return a string', () => {
      const parser = createParser();
      expect(parser('')).toBeString();
    });
    it('should accept a regex and return the same string if no match', () => {
      const parseCamelCase = createParser(/[A-Z]/);
      const [test0, test1, test2] = ['unknown', 'not_camel_case', 'still-not-camel-case'];
      expect(parseCamelCase(test0)).toBe(test0);
      expect(parseCamelCase(test1)).toBe(test1);
      expect(parseCamelCase(test2)).toBe(test2);
    });

    it('should run passed in function on any regex matches', () => {
      const parseCamelCase = createParser(/[A-Z]/, match => match.toLowerCase());
      const camelCaseStr = 'camelCaseString';
      expect(parseCamelCase(camelCaseStr)).toBe('camelcasestring');
    });
  });
});
