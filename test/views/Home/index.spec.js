import Home from '../../../src/views/Home'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Home />, div)
})

test('Home snapshot', () => {
  const tree = renderer.create(<Home />).toJSON()
  expect(tree).toMatchSnapshot()
})
