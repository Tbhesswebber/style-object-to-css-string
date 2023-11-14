import createParser from './createParser';

/**
 * @type import('./createParser').Parser
 */
const camelToKebab = createParser(/[A-Z]/, match => `-${match.toLowerCase()}`);
/**
 * @type import('./createParser').Parser
 */
const snakeToKebab = createParser(/_/, () => '-');

// disabled to allow named exports while only one named export exists
// eslint-disable-next-line
export { camelToKebab, snakeToKebab };
