import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin';
import { ADMIN_ROUTE, GAME_ROUTE, SOUND_ROUTE } from './routeConstants';
import Game from './components/Game';
import { withLayout } from './components/Layout/connect';
import Sound from './components/Sound';

const myRouter = ({ history }) => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={GAME_ROUTE}>
                    {withLayout(Game)}
                </Route>
                <Route exact path={ADMIN_ROUTE}>
                    <Admin />
                </Route>
                <Route exact path={SOUND_ROUTE}>
                    <Sound />
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
