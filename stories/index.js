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
  .addWithInfo('w/Primary Action (onClick)', 'Adding a primary action', () => (
    <ErrorState
      title="Sample Error"
      description="Something has gone terribly wrong"
      buttonText="Continue"
      onClick={action('onClick')} />
  ), { inline: true })
  .addWithInfo('w/Primary Action (href)', 'Adding a primary action w/href', () => (
    <ErrorState
      title="Sample Error"
      description="Something has gone terribly wrong"
      buttonText="Continue"
      href="https://example.com" />
  ), { inline: true })
