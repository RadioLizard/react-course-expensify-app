import React from 'react'
import {shallow} from 'enzyme'
import {AddExpensePage} from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper

beforeEach(()=>{
    startAddExpense=jest.fn()
     history={push: jest.fn()}
     wrapper=shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>)
})

test('Should render add expense page',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should utilize both spies', ()=>{
    wrapper.find("ExpenseForm").prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenCalledWith('/')
    expect(startAddExpense).toHaveBeenLastCalledWith( expenses[1])
})  