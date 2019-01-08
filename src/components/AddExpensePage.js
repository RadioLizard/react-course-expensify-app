import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense} from '../actions/expenses'

class AddExpensePage extends React.Component {
    addExpense=(expense)=>{
        this.props.startAddExpense(expense)
        this.props.history.push('/') 
    }
    render(){
        return(
            <div>
                <h1>Add an Expense</h1>
                <ExpenseForm
                    onSubmit={this.addExpense}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>({
    startAddExpense: (expense)=> dispatch(startAddExpense(expense))
})
    
const ConnectedAddExpensePage=connect(undefined, mapDispatchToProps)(AddExpensePage)

export default ConnectedAddExpensePage
export{AddExpensePage}