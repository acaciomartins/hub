import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import TelaRedux from './pages/tela-redux/telaRedux';
import TelaRedux2 from './pages/tela-redux2/telaRedux2';
import Renovation from './pages/insurance/renovation'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Renovation} />
                <Route path="/TelaRedux2" component={TelaRedux2} />
                <Route path="*" component={() => <h1>404 - Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    );
};