import React from 'react'
import {connect} from 'react-redux'
import Expense from './Expense'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseList=(props)=>(
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
        {
            props.expenses.length===0 ? (
                <div className="list-item list-item--message">
                    <p>No expenses to show</p>
                </div>
            ):(
                props.expenses.map((expense, index)=>(
                <Expense
                    {...expense}
                    key={index}
                />))
            )
        }
        </div>
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