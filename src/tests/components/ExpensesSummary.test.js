import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseSummary} from '../../components/ExpenseSummary'

test('Should render Expense Summary',()=>{
    const wrapper=shallow(<ExpenseSummary expenseTotal={0} expenseCount={0}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render Expense Summary correctly with just one item',()=>{
    const wrapper=shallow(<ExpenseSummary expenseTotal={134} expenseCount={1}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render Expense Summary correctly with multiple items',()=>{
    const wrapper=shallow(<ExpenseSummary expenseTotal={134567} expenseCount={7}/>)
    expect(wrapper).toMatchSnapshot()
})