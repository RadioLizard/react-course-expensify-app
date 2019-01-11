import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../actions/auth'

const LoginPage = ({startLogin})=>(
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p><i>It's time to get your expenses under control!</i></p>
            <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
    </div>
)
 
const mapDispatchToProps=(dispatch)=>{
    return {
    startLogin: ()=>{
        dispatch(startLogin())
    }
}
}

const ConnectedLoginPage = connect(undefined, mapDispatchToProps)(LoginPage)
export {LoginPage, ConnectedLoginPage}