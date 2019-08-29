import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App createCard={jest.fn()}/>)
  })

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  // it('should setState when createCard is called', () => {
  // wrapper.instance().createCard = jest.fn()
  


  // })
})