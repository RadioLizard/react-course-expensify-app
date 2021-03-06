
    //Test 3: Should remove expense (use spies, making sure they've been called)

    import React from 'react'
    import {shallow} from 'enzyme'
    import expenses from '../fixtures/expenses'
    import {EditPage} from '../../components/EditPage'
    

    let startEditExpense, startRemoveExpense, wrapper, history

    beforeEach(()=>{
        startEditExpense=jest.fn()
         startRemoveExpense=jest.fn()
         history={
             push: jest.fn()
         }
         wrapper=shallow(
             <EditPage 
                history={history} 
                startEditExpense={startEditExpense} 
                startRemoveExpense={startRemoveExpense} 
                expense={expenses[2]}
            />
        )
         
    })

    test('Should render edit expense page with snapshot',()=>{
        expect(wrapper).toMatchSnapshot()
    })
 
    test('Should handle edit expense correctly, running spy', ()=>{
       wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
       expect(history.push).toHaveBeenLastCalledWith('/')
       expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
    })   

    test('Should handle remove expense with spy', ()=>{
        wrapper.find("button").simulate('click')
        expect(history.push).toHaveBeenLastCalledWith('/')
        expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[2].id})
    })