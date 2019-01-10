import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'

const Header =({startLogout})=>(
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" exact={true} to="/">Dashboard</NavLink>
        <NavLink activeClassName="is-active" exact={true} to="/create">Add Expense</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
)   

const mapDispatchToProps=(dispatch)=>{
    return{
        startLogout: ()=> dispatch(startLogout())
    }
}
const ConnectedHeader =  connect(undefined, mapDispatchToProps)(Header)

export {Header, ConnectedHeader}