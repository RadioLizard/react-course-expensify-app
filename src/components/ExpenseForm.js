import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'

class ExpenseForm extends React.Component{
    constructor(props){
    super(props)
    this.state={
        description: props.expense ? props.expense.description : '',
        amount: props.expense ? (props.expense.amount/ 100).toString() : 0,
        note: props.expense ? props.expense.note : '',
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        focused:false,
        error:undefined
    }
}
    onDescriptionChange=(e)=>{
        const description = e.target.value
        this.setState(()=>({description}))
    }
    onNoteChange=(e)=>{
        const note=e.target.value
        this.setState(()=>({note}))
    }
    onAmountChange=(e)=>{
        const amount=e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }
    onDateChange=(createdAt)=>{
        if(createdAt){
            this.setState(()=>({createdAt}))
        }
    }
    onFocusChange=({focused})=>{
        this.setState(()=>({focused}))
    }
    onSubmit=(e)=>{
        e.preventDefault()
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error: "Please add a valid description and amount."}))
        }
        else{
            this.setState(()=>({error:undefined}))
            this.props.onSubmit({
              description: this.state.description,
              amount: parseFloat(this.state.amount, 10)*100,
              createdAt: this.state.createdAt.valueOf(),
              note: this.state.note
            })
        }
    }
    render(){
        return(
            <div>
                {!!this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        autoFocus
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="number"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day)=>false}
                    />
                    <textarea
                        value={this.state.note}
                        placeholder="add a note for this expense"
                        onChange={this.onNoteChange}>
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm