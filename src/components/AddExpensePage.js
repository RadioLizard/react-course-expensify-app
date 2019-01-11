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
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add an Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        onSubmit={this.addExpense}
                    />
                </div>
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