import { camelToKebab, snakeToKebab } from './parsers';

describe('camelToKebab', () => {
  it('should be a function', () => {
    expect(camelToKebab).toBeFunction();
  });

  it('should convert from camel case to kebab case', () => {
    const camelCaseStr = 'camelCaseString';
    expect(camelToKebab(camelCaseStr)).toBe('camel-case-string');
  });
});

describe('snakeToKebab', () => {
  it('should be a function', () => {
    expect(snakeToKebab).toBeFunction();
  });

  it('should convert from snake case to kebab case', () => {
    const snakeCaseStr = 'snake_case_string';
    expect(snakeToKebab(snakeCaseStr)).toBe('snake-case-string');
  });
});
