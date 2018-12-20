import selectExpensesTotal from '../../selectors/filters'
import expenses from '../fixtures/expenses'

test('Should return 0 if there are no expenses', ()=>{
    const result=selectExpensesTotal()
    expect(result).toEqual(0)
})

test('Should correctly add up a single Expense', ()=>{
    const array= [expenses[0]]
    const result=selectExpensesTotal(array)
    expect(result).toEqual(expenses[0].amount)
})

test('Should correctly add multiple expenses', ()=>{
    const array=[...expenses]
    const result=selectExpensesTotal(array)
    expect(result).toEqual(5790)
})