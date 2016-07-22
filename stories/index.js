import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import ErrorState from '../src'

storiesOf('ErrorState', module)
  .addWithInfo('Basic', 'Basic, without any arguments', () => (
    <ErrorState />
  ), { inline: true })
  .addWithInfo('w/Title', 'Displaying a custom title', () => (
    <ErrorState title="Sample Error" />
  ), { inline: true })
  .addWithInfo('w/Description', 'Displaying a custom title and description', () => (
    <ErrorState title="Sample Error" description="Something has gone terribly wrong" />
  ), { inline: true })
