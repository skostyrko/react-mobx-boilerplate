import { configure, setAddon } from '@storybook/react'

// Addons (to add by setAddon)
import chaptersAddon from 'react-storybook-addon-chapters';

const req = require.context('../app', true, /.stories.js$/)

setAddon(chaptersAddon);

function loadStories () {
  req.keys().forEach((filename) => {
    req(filename)
  })
}

configure(loadStories, module)
