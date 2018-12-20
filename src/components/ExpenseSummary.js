import React from 'react'
import {connect} from 'react-redux'
import  numeral from 'numeral'
import selectExpensesTotal from '../selectors/filters'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseSummary = (props) =>(
    <div>
        <p>Viewing {props.expenseCount} 
            {props.expenseCount===1 ? 
            <span> expense</span> : 
            <span> expenses</span>}, 
            which {props.expenseCount===1 ?
            <span>totals </span>:
            <span>total </span>}
            {numeral(props.expenseTotal / 100).format('$0,0.00')}</p>
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