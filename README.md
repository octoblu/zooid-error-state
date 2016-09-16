# zooid-error-state

[![Build Status](https://travis-ci.org/octoblu/zooid-error-state.svg?branch=master)](https://travis-ci.org/octoblu/zooid-error-state)
[![Test Coverage](https://codecov.io/gh/octoblu/zooid-error-state/branch/master/graph/badge.svg)](https://codecov.io/gh/octoblu/zooid-error-state)
[![Dependency status](http://img.shields.io/david/octoblu/zooid-error-state.svg?style=flat)](https://david-dm.org/octoblu/zooid-error-state)
[![devDependency Status](http://img.shields.io/david/dev/octoblu/zooid-error-state.svg?style=flat)](https://david-dm.org/octoblu/zooid-error-state#info=devDependencies)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

[![NPM](https://nodei.co/npm/zooid-error-state.svg?style=flat)](https://npmjs.org/package/zooid-error-state)

## Install
```
npm install --save zooid-error-state
```

## Props
| Prop        | Type   | Default | Description                                          |
| ----------- | -------| --------| -----------------------------------------------------|
| buttonText  | string |         | Text to display in the primary action (optional)     |
| className   | string |         | Additional css classes to merge into the component   |
| description | string |         | Text explaining the cause of the error               |
| href        | string |         | URL for the primary action to link to                |
| onClick     | func   |         | Called when the primary action is clicked (optional) |
| title       | string |         | Title of the error                                   |

## Note

For the button to render, a truthy `buttonText` value and either an `onClick` or `href` value must be specified.

## Example
```js
import ErrorState from 'zooid-error-state'

export default class App extends Component {
  render() {
    return (
      <ErrorState
        title="Sample Error"
        description="Something has gone terribly wrong"
        buttonText="Continue"
        onClick={action('onClick')} />
    )
  }
}
```
