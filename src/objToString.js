import { camelToKebab } from './parsers';

/**
 * Translate a style object into a CSS string
 * @param {Object} styleObj - The object to run a particular parser against
 * @param {import('./createParser').Parser} [parser=camelToKebab] - The parser to use for key transformation
 * @returns {string}
 */
function objToString(styleObj, parser = camelToKebab) {
  if (!styleObj || typeof styleObj !== 'object' || Array.isArray(styleObj)) {
    throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
  }
  const lines = Object.keys(styleObj).map(property => `${parser(property)}: ${styleObj[property]};`);
  return lines.join('\n');
}

export default objToString;
