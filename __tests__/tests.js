// __tests__/test.js

/*global jest*/

"use strict";

jest.dontMock('../index.js');
describe('react-proptypes-url-validator', function() {
  it('returns Error if validation fails', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var validateURL = require('../index.js');
    var invalidURL = 'httpz://foo/doo.boodoo';

    var Component = React.createClass({
      propTypes: {
        url: validateURL(props, propName, componentName)
      },

      render: function() {
        return <div />;
      }
    });

    TestUtils.renderIntoDocument(<Component url={invalidURL} />);

    expect(console.error.argsForCall.length).toBe(1);
    expect(console.error.argsForCall[0][0]).toBe(
      'Warning: Invalid url supplied to `Component`'
    );

  });
});
