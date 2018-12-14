import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filters'
import moment from 'moment'

test('should generate set start date object', ()=>{
    const action= setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('should generate set end date object', ()=>{
    const action=setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('Should generate sort by amount object',()=>{
    const action=sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('Should generate sort by date object', ()=>{
    const action=sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('Should generate set text filter object with text value', ()=>{
    const text="Goober"
    const action=setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    })
})

test('Should generate set text filter object with default value', ()=>{
    const action=setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})