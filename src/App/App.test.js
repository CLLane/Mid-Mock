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

//   it('should update state when createCard is called', () => {
//     const mockEvent = {target: {img: 'url', name: 'Chris', description: 'Has a small amount of confidence in this test...lol', price: 'to damn high'}}
//   })

//     const expectedName = {name: 'Chris'}

//     wrapper.instance().createCard(mockEvent)
})