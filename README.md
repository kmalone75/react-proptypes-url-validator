[![Circle CI](https://circleci.com/gh/irvinebroque/react-proptypes-url-validator/tree/master.svg?style=svg)](https://circleci.com/gh/irvinebroque/react-proptypes-url-validator/tree/master)

[![NPM](https://nodei.co/npm/react-proptypes-url-validator.png)](https://nodei.co/npm/react-proptypes-url-validator/)

# react-proptypes-url-validator

Custom [PropType](https://facebook.github.io/react/docs/reusable-components.html#prop-validation) that validates URLs. Depends on [url-regex](https://www.npmjs.com/package/url-regex).

### Usage

```
npm install --save react-proptypes-url-validator

var validateURL = require('react-proptypes-url-validator');

var Component = React.createClass({
  propTypes: {
    url: validateURL
  },

  render: function() {
    return <div />;
  }
});

// If you pass an invalid URL as props...
React.render(<Component url="httpz://foo/bar.notaurl" />);

// You'll get a console warning...
'Warning: Failed propType: Invalid url supplied to Component.'
```

### Why?

To warn if invalid URLs are passed down as props to React components. Particularly useful if your app has lots of external links, or if you're using React in a context with mixed server-side and client-side routing/rendering.

### Requirements

Uses template literals, so you'll need an ES6 environment (aka you're running Babel or equivalent), but if you're using React, you should probably be doing this anyways.

### License

MIT
