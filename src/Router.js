import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin';
import { ADMIN_ROUTE, GAME_ROUTE } from './routeConstants';
import Game from './components/Game';

const myRouter = ({ history }) => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={GAME_ROUTE}>
                    <Game />
                </Route>
                <Route exact path={ADMIN_ROUTE}>
                    <Admin />
                </Route>
                <Redirect to={GAME_ROUTE} />
            </Switch>
        </Router>
    );
};

myRouter.propTypes = {
    history: PropTypes.object.isRequired,
};

export default myRouter;
