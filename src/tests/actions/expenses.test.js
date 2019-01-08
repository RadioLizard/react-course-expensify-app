import {addExpense, removeExpense, editExpense, startAddExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {database} from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk]) 

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

// test('should add expense action object with default values', ()=>{
//     const action=addExpense({})
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense:{
//             description: '',
//             notes: '',
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     })
// })

test('should add expense action object', ()=>{
    const action=addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done)=>{
    const store=createMockStore({})
    const expenseData={
        description: 'space cat',
        amount: '350000',
        createdAt: 1000,
        note: 'space cats rule!'
    }
    
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should add expense with defaults to database and store', ()=>{
    const store=createMockStore({})
    const expenseData={}
    const estimateData={
        amount: 0,
        description: '',
        createdAt: 0,
        note: ''
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...estimateData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(estimateData)
        done()
    })
})