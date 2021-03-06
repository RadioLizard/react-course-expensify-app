import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('Should render Expense Form correctly',()=>{
    const wrapper=shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
}) 

test('Should render expense form with expense data',()=>{
    const wrapper=shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should Render error for invalid form submission', ()=>{
    const wrapper=shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('Should set description on input change',()=>{
    const value="New description"
    const wrapper=shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('description')).toBe(value)
})

test('Should set note on input change',()=>{
    const value="New note"
    const wrapper=shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change',{
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value)
})

test('Should set amount with valid input',()=>{
    const value="27.30"
    const wrapper=shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('Should not set amount with invalid input',()=>{
    const value="12.1222"
    const wrapper=shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(0)
})

test('Should call onSubmit prop for valid form submission', ()=>{
    const onSubmitSpy = jest.fn()
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe(undefined)
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        notes: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
}) 

test('Should set new date on date change', ()=>{
    const now=moment()
    const wrapper=shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('Should set focused to true', ()=>{
    const focused = true
    const wrapper=shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('focused')).toEqual(true)
}) 