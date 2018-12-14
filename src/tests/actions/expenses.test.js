import {addExpense, removeExpense, editExpense} from '../../actions/expenses'

test('should remove expense action object', ()=>{
    const action=removeExpense({id: 'abdceft'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abdceft'
    })
})

test('should edit expense action object', ()=>{
    const action=editExpense('abdcefg', {description: 'cat', amount: 1023})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abdcefg',
        updates: {
            description: 'cat',
            amount: 1023
        }
    })
})

test('should add expense action object with default values', ()=>{
    const action=addExpense({})
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            description: '',
            notes: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})

test('should add expense action object', ()=>{
    const expenseData = {
        description: "Rent",
        amount: 109500,
        createdAt: 1000,
        notes: "this was last months rent"
    }
    const action=addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    }) 
})