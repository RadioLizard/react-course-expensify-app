import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('Should set up default filter values',()=>{
    const state=filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('Should set sortBy to amount',()=>{
    const state=filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('Should set sortBy to date',()=>{
    const defaultState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action={type: 'SORT_BY_DATE'}
    const state=filtersReducer(defaultState, action)
    expect(state.sortBy).toBe('date')
})

test('Should set text filter',()=>{
    const action={
        type: 'SET_TEXT_FILTER',
        text: 'Booger'
    }
    const state=filtersReducer(undefined, action)
    expect(state.text).toBe(action.text)
})

test('Should set start Date filter',()=>{
    const action={
        type: 'SET_START_DATE',
        date: moment(0).valueOf()
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(action.date)
})

test('should set end date filter', ()=>{
    const action={
        type: 'SET_END_DATE',
        date: moment(0).valueOf()
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(action.date)
})