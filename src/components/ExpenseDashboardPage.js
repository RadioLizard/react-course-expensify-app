import React from 'react'
import ConnectedExpenseList from './ExpenseList'
import ConnectedExpenseListFilters from './ExpenseListFilters'
import ConnectedExpenseSummary from './ExpenseSummary'

const ExpenseDashboardPage = () =>{
    return(
    <div>
        <ConnectedExpenseSummary/> 
        <ConnectedExpenseListFilters/>
        <ConnectedExpenseList/>
    </div>
    )
}

export default ExpenseDashboardPage