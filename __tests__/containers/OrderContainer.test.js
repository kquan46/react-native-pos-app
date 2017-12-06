import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import OrderContainer from '../../app/containers/OrderContainer'
import { ORDER_DEFAULT } from '../../__mocks__/order'

describe('<OrderContainer />', () => {
  beforeEach(() => {

  })
  it('render DUMB component', () => {
    const wrapper = shallow(<OrderContainer order={ORDER_DEFAULT}/>)
    expect(wrapper.length).to.equal(1)
  })
})
