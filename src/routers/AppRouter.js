import React from 'react'
import{BrowserRouter, Route, Switch} from 'react-router-dom'
import ConnectedAddExpensePage from '../components/AddExpensePage'
import ConnectedEditPage from '../components/EditPage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import Header from '../components/Header'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter=()=>(
    <BrowserRouter>
    <div>
    <Header/>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={ConnectedAddExpensePage}/>
            <Route path="/edit/:id" component={ConnectedEditPage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter