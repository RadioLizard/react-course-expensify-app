import React from 'react'
import {shallow} from 'enzyme'
import Expense from '../../components/Expense'
import expenses from '../fixtures/expenses'

test('Should render expense with given information',()=>{
    const wrapper=shallow(<Expense {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})