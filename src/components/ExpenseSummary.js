import React from 'react'
import {connect} from 'react-redux'
import{Link} from 'react-router-dom'
import  numeral from 'numeral'
import selectExpensesTotal from '../selectors/filters'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseSummary = (props) =>(
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing  
                <span className="span"> {props.expenseCount} </span>
                {props.expenseCount===1 ? 
                <span> expense</span> : 
                <span> expenses</span>}, 
                which {props.expenseCount===1 ?
                <span>totals </span>:
                <span>total </span>}
                <span className="span">{numeral(props.expenseTotal / 100).format('$0,0.00')}</span> 
            </h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
)

const mapStateToProps=(state)=>{
    return{
        expenseTotal: selectExpensesTotal(getVisibleExpenses(state.expenses, state.filters)),
        expenseCount: getVisibleExpenses(state.expenses, state.filters).length
    }
}
const ConnectedExpenseSummary = connect(mapStateToProps)(ExpenseSummary)

export default ConnectedExpenseSummary
export{ExpenseSummary}