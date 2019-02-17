import objToString from './objToString';
import createParser from './createParser';
import * as parsers from './parsers';

export default objToString;
export { parsers, createParser };
module.exports = objToString;
module.exports.createParser = createParser;
module.exports.parsers = { ...parsers };
