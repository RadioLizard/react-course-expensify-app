import React from 'react'
import{Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import ConnectedAddExpensePage from '../components/AddExpensePage'
import ConnectedEditPage from '../components/EditPage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import {ConnectedLoginPage} from '../components/LoginPage'
import ConnectedPrivateRoute from './PrivateRoute'
import ConnectedPublicRoute from './PublicRoute'

const history = createHistory()

const AppRouter=()=>(
    <Router history={history}>
    <div>
        <Switch>
            <ConnectedPublicRoute path="/" component={ConnectedLoginPage} exact={true}/>
            <ConnectedPrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
            <ConnectedPrivateRoute path="/create" component={ConnectedAddExpensePage}/>
            <ConnectedPrivateRoute path="/edit/:id" component={ConnectedEditPage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </Router>
)
export {history}
export default AppRouter