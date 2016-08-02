# zooid-error-state

[![Build Status](https://travis-ci.org/octoblu/zooid-error-state.svg?branch=master)](https://travis-ci.org/octoblu/zooid-error-state)
[![npm version](https://badge.fury.io/js/zooid-error-state.svg)](http://badge.fury.io/js/zooid-error-state)
[![Code Climate](https://codeclimate.com/github/octoblu/zooid-error-state.png)](https://codeclimate.com/github/octoblu/zooid-error-state)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

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
| onClick     | func   |         | Called when the primary action is clicked (optional) |
| title       | string |         | Title of the error                                   |

## Note

If falsy values are passed in for either the `onClick` or the `buttonText`, the primary action button will not render

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
