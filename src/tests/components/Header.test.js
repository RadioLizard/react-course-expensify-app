import React from 'react'
import {shallow} from 'enzyme'
import {Header} from '../../components/Header'

const logout = jest.fn()

test('Should render header correctly', ()=>{
    const wrapper=shallow(<Header startLogout={()=>{}}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should call startLogout on button click', ()=>{
    const wrapper=shallow(<Header startLogout={logout}/>)
    wrapper.find('button').at(0).simulate('click')
    expect(logout).toHaveBeenCalled()
})