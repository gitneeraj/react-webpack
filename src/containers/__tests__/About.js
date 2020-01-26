import React from 'react'
import { shallow } from 'enzyme'
import About from '../About'

describe('About Component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<About />)
    expect(wrapper.exists()).toBe(true)
  })
})
