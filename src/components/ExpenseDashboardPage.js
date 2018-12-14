import React from 'react'
import ConnectedExpenseList from './ExpenseList'
import ConnectedExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () =>{
    return(
    <div>
        <p>This is my expense dashboard page</p>   
        <ConnectedExpenseList/>
        <ConnectedExpenseListFilters/>
    </div>
    )
}

export default ExpenseDashboardPage