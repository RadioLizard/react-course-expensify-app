import React from 'react'
import {connect} from 'react-redux'
import {DateRangePicker} from 'react-dates'
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters'

class ExpenseListFilters extends React.Component{
    state={
        calandarFocused: null,
    }
    onDatesChange=({startDate, endDate})=>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange=(calandarFocused)=>{
        this.setState(()=>({calandarFocused}))
    }
    onTextChange=(e)=>{
        this.props.setTextFilter(e.target.value)
    }
    onSortChange=(e)=>{
        if(e.target.value==="date"){
            this.props.sortByDate()
        }
        else if(e.target.value==="amount"){
            this.props.sortByAmount()
        }
    }
    render(){
        return(
        <div className="content-container"> 
            <div className="input-group">
                <div className="input-group__item">
                    <input 
                        className="text-input"
                        type="text" 
                        value={this.props.filters.text} 
                        onChange={this.onTextChange}
                        placeholder="Search expenses"
                    />
                </div>
                <div className="input-group__item">
                    <select className="select" value={this.props.filters.sortBy} onChange={this.onSortChange}> 
                        <option value="date">date</option>
                        <option value="amount">amount</option>
                    </select>
                </div>
                <div className="input-group__item">
                    <DateRangePicker
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calandarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                        showClearDates={true}
                    />
                </div>
            </div>
        </div>
        )
    }
} 

const mapStateToProps = (state) =>{
    return{
        filters:state.filters
    }
}

const mapDispatchToProps = (dispatch)=>({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

const ConnectedExpenseListFilters=connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)

export default ConnectedExpenseListFilters
export {ExpenseListFilters}