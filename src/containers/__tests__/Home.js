import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Home from '../Home'

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

describe('Home Component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.exists()).toBe(true)
  })
})
