import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { OrderActions } from '../../../app/components/order/OrderActions'


describe('<OrderActions />', () => {
  beforeEach(() => {

  })
  it('render DUMB component', () => {
    const wrapper = shallow(<OrderActions />)
    expect(wrapper.length).to.equal(0)
  })
})
