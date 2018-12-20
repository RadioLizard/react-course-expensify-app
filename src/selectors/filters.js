const selectExpensesTotal=(expenses=[])=>{
    let total=0
    if(expenses){
        expenses.forEach((expense)=>{total+=expense.amount})
    }
    return total
}

export default selectExpensesTotal