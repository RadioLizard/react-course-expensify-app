import React from 'react'
import ReactDOM from "react-dom"
import AppRouter from './routers/AppRouter'
import {Provider} from 'react-redux'
import configureStore from './/store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import "react-dates/lib/css/_datepicker.css"
import './firebase/firebase'
import './playground/promises'
import {startSetExpenses} from './actions/expenses'

const store = configureStore()

const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
const appRoot = document.getElementById("app")
ReactDOM.render(<p>Loading...</p>, appRoot)

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, appRoot)
})
