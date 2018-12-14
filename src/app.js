import React from 'react'
import ReactDOM from "react-dom"
import AppRouter from './routers/AppRouter'
import {Provider} from 'react-redux'
import configureStore from './/store/configureStore'
import {addExpense} from './/actions/expenses'
import {setTextFilter} from './/actions/filters'
import getVisibleExpenses from './/selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import "react-dates/lib/css/_datepicker.css"

const store = configureStore()


store.dispatch(addExpense({description: 'water bill', amount: 20400}))
store.dispatch(addExpense({description: 'gas bill', amount: 333000,createdAt: 60000}))
store.dispatch(addExpense({description: 'coffee bill', amount: 1111111111111111}))

const state=store.getState()
const visibleExpenses=getVisibleExpenses(state.expenses, state.filters)

// console.log(visibleExpenses)
// console.log(store.getState())

const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

const appRoot = document.getElementById("app")

ReactDOM.render(jsx, appRoot)