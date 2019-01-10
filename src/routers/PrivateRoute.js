import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import {ConnectedHeader} from '../components/Header'

const PrivateRoute = ({
    isAuthenticated, 
    component: Component, 
    ...rest
    })=>(
    <Route {...rest} component={(props)=>(
        isAuthenticated ? (
            <div>
                <ConnectedHeader/>
                <Component {...props}/>
            </div>
            
        ):(
            <Redirect to="/"/>
        )
    )}/>
)
const mapStateToProps=(state)=>({
    isAuthenticated: !!state.auth.uid
})
const ConnectedPrivateRoute=connect(mapStateToProps)(PrivateRoute)

export default ConnectedPrivateRoute