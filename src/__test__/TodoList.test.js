import React from 'react'
import { shallow } from 'enzymes'
import toJson from 'enzyme-to-json'
import TodoList from '../TodoList'

it ('renders without craching', () => {
  shallow(<TodoList  />)
})

it('matches a snapshot', () => {
  const component = shallow(<TodoList />)
  const tree =toJson(component)
  expect(tree).toMatchSnapshot()
})
