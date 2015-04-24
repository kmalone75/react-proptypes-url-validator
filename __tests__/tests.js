// __tests__/test.js

/*global jest*/

"use strict";

jest.dontMock('../index.js');
describe('react-proptypes-url-validator', function() {

  // Boilerplate to simplify assertions for warnings
  var warn, warnings;
  beforeEach(function () {
    warn = console.warn;
    warnings = [];
    console.warn = function () {
      warnings.push(Array.prototype.join.call(arguments, ' '));
    };
  });
  afterEach(function () {
    console.warn = warn;
  });

  it('returns Error if validation fails', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var validateURL = require('../index.js');
    var invalidURL = 'httpz://foo/doo.boodoo';
    var expectedWarning = 'Invalid url supplied to Component'

    var Component = React.createClass({
      propTypes: {
        url: validateURL
      },

      render: function() {
        return <div />;
      }
    });

    TestUtils.renderIntoDocument(<Component url={invalidURL} />);

    expect(warnings.length).toEqual(1);
    expect(warnings[0]).toContain(expectedWarning);

  });
});
