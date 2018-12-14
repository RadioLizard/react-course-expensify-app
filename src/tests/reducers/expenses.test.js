import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set up default Expenses array',()=>{
    const state = expensesReducer(undefined, '@@INIT')
    expect(state).toEqual([])
})

test('Should accurately remove an expense by id',()=>{
    const action={
        type: 'REMOVE_EXPENSE',
        id: '2'
    }
    const state=expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove any expenses when an invalid id is given',()=>{
    const action={
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state=expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('Should add an expense',()=>{
    const action={
        type: "ADD_EXPENSE",
        expense: {
            description: 'rent',
            note: '', 
            amount: 145,
            createdAt: 0
        }
    }
    const state=expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
})

test('Should edit an expense',()=>{
    const action={
        type: "EDIT_EXPENSE",
        id: '1',
        updates: {
            description: 'gumbo',
            amount: 100000000000000
        }
    }
    const state=expensesReducer(expenses, action)
    expect(state[0]).toEqual({
        id: '1',
        description: action.updates.description,
        notes: '',
        amount: action.updates.amount,
        createdAt: 0
    })
})

test('should not edit an expense if id is not valid',()=>{
    const action={
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount: 500000000000000,
            note: 'wow that was pricey'
        }
    }
    const state=expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})