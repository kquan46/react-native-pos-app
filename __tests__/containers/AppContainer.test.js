import 'react-native';
import React from 'react';
import { shallow } from 'enzyme'
import { expect } from 'chai'
import AppContainer from '../../app/containers/AppContainer';

describe('<AppContainer />', () => {
  beforeEach(() => {

  })
  it('render DUMB component', () => {
    const wrapper = shallow(<AppContainer />)
    expect(wrapper.length).to.equal(1)
  })
})
