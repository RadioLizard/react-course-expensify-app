import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'

const Header =({startLogout})=>(
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard"> 
                    <h1>Expensify</h1>
                </Link>
                <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
)   

const mapDispatchToProps=(dispatch)=>{
    return{
        startLogout: ()=> dispatch(startLogout())
    }
}
const ConnectedHeader =  connect(undefined, mapDispatchToProps)(Header)

export {Header, ConnectedHeader}