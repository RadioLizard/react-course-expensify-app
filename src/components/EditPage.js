import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense, removeExpense} from '../actions/expenses'

class EditPage extends React.Component{
    onSubmit=(expense)=>{
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onRemove=()=>{
        this.props.removeExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>
                Delete Expense</button>
            </div>
            )
    }
}

const mapStateToProps = (state, props)=>{
    return{
        expense: state.expenses.find((expense)=>expense.id===props.match.params.id),
    }
}

const mapDispatchToProps=(dispatch, props)=>{
    return{
        editExpense: (id, expense)=>dispatch(editExpense(id, expense)),
        removeExpense: (data)=>dispatch(removeExpense(data))
    }
}


const ConnectedEditPage=connect(mapStateToProps, mapDispatchToProps)(EditPage)

export default ConnectedEditPage
export{EditPage}