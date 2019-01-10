import React from 'react'
import {shallow} from 'enzyme'
import {LoginPage} from '../../components/LoginPage'

const startLogin=jest.fn()
test('Should render Login page correctly', ()=>{
    const wrapper=shallow(<LoginPage startLogin={()=>{}}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should call startLogin on button click', ()=>{
    const wrapper=shallow(<LoginPage startLogin={startLogin}/>)
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled()
})