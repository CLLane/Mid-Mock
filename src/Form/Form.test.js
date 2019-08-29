import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Form from './Form.js';

describe('Form', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Form createCard={jest.fn()}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should reset the inputs to empty strings when reset input is called', () => {
    wrapper.instance().setState({
      img: 'https://s7d2.scene7.com/is/image/DesignWithinReach/PD_2514014_MAIN?$main$',
      name: 'Chris',
      description: 'Hoping this test is going to pass',
      price: 'To Damn High'
    })

    wrapper.instance().resetInputs()

    expect(wrapper.state()).toEqual({
      img: 'https://s7d2.scene7.com/is/image/DesignWithinReach/PD_2514014_MAIN?$main$',
      name: '',
      description: '',
      price: ''
    })
  })
  
})