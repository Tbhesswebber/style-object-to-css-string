function createParser(matcher, replacer) {
  const regex = RegExp(matcher, 'g');
  return string => {
    // * throw an error if not a string
    if (typeof string !== 'string') {
      throw new TypeError(`expected an argument of type string, but got ${typeof string}`);
    }

    // * if no match between string and matcher
    if (!string.match(regex)) {
      return string;
    }

    // * executes the replacer function for each match
    // ? replacer can take any arguments valid for String.prototype.replace
    return string.replace(regex, replacer);
  };
}

export default createParser;
