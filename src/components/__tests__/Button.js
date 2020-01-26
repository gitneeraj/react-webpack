import React from 'react'
import { shallow } from 'enzyme'
import Button from '../Button'

describe('Button Component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.exists()).toBe(true)
  })
})
