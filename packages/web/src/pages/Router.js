import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import SingIn from './SignIn';

export default function Router () {
    return (
        <Switch>
            <Route exact path={['', '/']} component={Home} />
            <Route exact path="/sign-in" component={SingIn} />        
        </Switch>
    );
}