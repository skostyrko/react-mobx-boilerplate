import React from 'react'
import SampleComponent from './SampleComponent'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <SampleComponent>Test</SampleComponent>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
