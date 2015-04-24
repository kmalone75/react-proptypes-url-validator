var urlRegex = require('url-regex');

var validateURL = function(props, propName, componentName) {
  var propValue = props[propName];
  if (!urlRegex({exact: true}).test(propValue)) {
    return new Error(
      `Invalid ${propName} supplied to ${componentName}.`
    );
  }
  return null;
}

module.exports = validateURL;
