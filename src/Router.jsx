import React from 'react';
import { Route, Switch } from 'react-router';
// import About from './containers/About';
import Cart from './containers/Cart';
import Home from './containers/Home';
import Shipping from './containers/Shipping';
import Signin from './containers/Signin';
import SignUp from './containers/SignUp';
import ThankYou from './containers/ThankYou';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/signup'} component={SignUp} />
                <Route exact path={'/signin'} component={Signin} />
                <Route exact path={'/carts'} component={Cart} />
                <Route exact path={'/shipping'} component={Shipping} />
                <Route exact path={'/thankyou'} component={ThankYou} />
            </Switch>
        </>
    );
};
export default Router;
