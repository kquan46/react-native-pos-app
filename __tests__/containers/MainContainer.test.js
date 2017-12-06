import 'react-native';
import React from 'react';
import { shallow } from 'enzyme'
import { expect } from 'chai'
import MainContainer from '../../app/containers/MainContainer';


describe('<MainContainer />', () => {
  beforeEach(() => {

  })
  it('render DUMB component', () => {
    const wrapper = shallow(<MainContainer />)
    expect(wrapper.length).to.equal(1)
  })
})
