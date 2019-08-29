import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<Card 
      data=''
    />)
    expect(wrapper).toMatchSnapshot()
  })

  
})