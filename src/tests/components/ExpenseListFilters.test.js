import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters, filters2} from '../fixtures/filters'
import expenses from '../fixtures/expenses'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(()=>{
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate=jest.fn()
    setEndDate=jest.fn()
    wrapper=shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
})

test('Should render expense list filters correctly', ()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should render exense list filters with alt data correctly', ()=>{
    wrapper.setProps({
        filters: filters2
    })
    expect(wrapper).toMatchSnapshot()
})

test('Should handle text change',()=>{
    wrapper.find('input').simulate('change', {
        target: {
            value: 'wicker'
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith('wicker')
})

test('Should sort by date',()=>{
    wrapper.setProps({
        filters: filters2
    })
    wrapper.find('select').simulate('change', {
        target:{
            value: 'date'
        }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('Should sort by amount',()=>{
    wrapper.find('select').simulate('change', {
        target:{
            value: 'amount'
        }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('Should handle date changes',()=>{
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate: -30000000, endDate: 30000000})
    expect(setStartDate).toHaveBeenLastCalledWith(-30000000)
    expect(setEndDate).toHaveBeenLastCalledWith(30000000)
})

test('Should handle date focus changes',()=>{

    wrapper.find('DateRangePicker').prop('onFocusChange')('endDate')
    expect(wrapper.state('calandarFocused')).toBe('endDate')
})