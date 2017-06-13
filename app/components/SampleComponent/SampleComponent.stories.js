import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import { WithNotes } from '@storybook/addon-notes'

import SampleComponent from './SampleComponent'

const stories = storiesOf('Button', module)
stories.addDecorator(withKnobs)

stories.add('with text (with knob)', () => (
  <div>
    <SampleComponent onClick={action('clicked')}>{text('Label', 'Hello Button')}</SampleComponent>
  </div>
))
.add('with some emoji (with notes)', () => (
  <WithNotes notes={'Some info on component'}>
    <div>
      <SampleComponent onClick={action('clicked')}>😀 😎 👍 💯</SampleComponent>
    </div>
  </WithNotes>
))
