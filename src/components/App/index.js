import React, { useReducer } from 'react';
import Router from '../../Router';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import GameContext from '../../contexts/GameContext';
import UserContext from '../../contexts/UserContext';
import GameReducer, {
    gameInitialState,
    InitGameReducer,
} from '../../contexts/GameContext/reducer';
import UserReducer, {
    userInitialState,
    InitUserReducer,
} from '../../contexts/UserContext/reducer';

import SocketContext2, {socket} from '../../socket';

const Index = ({ history, classes }) => {
    const [userState, userDispatch] = useReducer(
        UserReducer,
        userInitialState,
        InitUserReducer,
    );

    const [gameState, gameDispatch] = useReducer(
        GameReducer,
        gameInitialState,
        InitGameReducer,
    );

    return (
        <GameContext.Provider value={{ gameState, gameDispatch }}>
            <UserContext.Provider value={{ userState, userDispatch }}>
                <SocketContext2.Provider value={{ socket }}>
                    <div className={classes.root}>
                        <Router history={history} />
                    </div>
                </SocketContext2.Provider>
            </UserContext.Provider>
        </GameContext.Provider>
    );
};

Index.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
