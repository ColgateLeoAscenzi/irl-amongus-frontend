import React, { useEffect, useReducer, useState } from 'react';
import socketClient from 'socket.io-client';
import Router from '../../Router';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import GameContext from '../../contexts/GameContext';
import UserContext from '../../contexts/UserContext';
import SocketContext from '../../contexts/SocketContext';
import GameReducer, {
    gameInitialState,
    InitGameReducer,
} from '../../contexts/GameContext/reducer';
import UserReducer, {
    userInitialState,
    InitUserReducer,
} from '../../contexts/UserContext/reducer';
import { socketInitialState } from '../../contexts/SocketContext/reducer';

const SERVER = process.env.REACT_APP_API_URL;

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

    const [socket, setSocket] = useState(socketInitialState);

    useEffect(() => {
        setSocket(socketClient(SERVER));
        return () => {
            socket && socket.disconnect();
            setSocket(null);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <GameContext.Provider value={{ gameState, gameDispatch }}>
            <UserContext.Provider value={{ userState, userDispatch }}>
                <SocketContext.Provider value={{ socket, setSocket }}>
                    <div className={classes.root}>
                        <Router history={history} />
                    </div>
                </SocketContext.Provider>
            </UserContext.Provider>
        </GameContext.Provider>
    );
};

Index.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
