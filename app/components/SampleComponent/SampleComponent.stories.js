import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'
import { WithNotes } from '@kadira/storybook-addon-notes'

import SampleComponent from './SampleComponent'

const stories = storiesOf('Button', module)
stories.addDecorator(withKnobs)

stories.add('with text (with knob)', () => (
  <SampleComponent onClick={action('clicked')}>{text('Label', 'Hello Button')}</SampleComponent>
))
.add('with some emoji (with notes)', () => (
  <WithNotes notes={'Some info on component'}>
    <SampleComponent onClick={action('clicked')}>😀 😎 👍 💯</SampleComponent>
  </WithNotes>
))
