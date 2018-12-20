import React from 'react'
import ConnectedExpenseList from './ExpenseList'
import ConnectedExpenseListFilters from './ExpenseListFilters'
import ConnectedExpenseSummary from './ExpenseSummary'

const ExpenseDashboardPage = () =>{
    return(
    <div>
        <p>This is my expense dashboard page</p>   
        <ConnectedExpenseList/>
        <ConnectedExpenseListFilters/>
        <ConnectedExpenseSummary/>
    </div>
    )
}

export default ExpenseDashboardPage