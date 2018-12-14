import React from 'react'
import {connect} from 'react-redux'
import Expense from './Expense'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseList=(props)=>(
    <div>
        {
            props.expenses.length===0 ? (
                <p>No expenses to show</p>
            ):(
                props.expenses.map((expense, index)=>(
                <Expense
                    {...expense}
                    key={index}
                />))
            )
        }
    </div>
)

const mapStateToProps=(state)=>{
    return{
        expenses: getVisibleExpenses(state.expenses, state.filters),
    }
}
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)

export default ConnectedExpenseList
export {ExpenseList}