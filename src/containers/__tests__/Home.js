import React from 'react'
import { shallow } from 'enzyme'
import Home from '../Home'

describe('Home Component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.exists()).toBe(true)
  })
})
