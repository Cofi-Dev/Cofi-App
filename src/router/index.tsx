import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import {Home} from '../views'
import {About} from '../views'

const AppRouter: React.FC = (): ReactElement => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Redirect to='/' />
        </BrowserRouter>
    )
}

export default AppRouter