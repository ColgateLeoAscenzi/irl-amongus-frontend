import React, { useContext } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { dispatch } from '../../contexts/utils';
import GameContext from '../../contexts/GameContext';
import {
    resetGame,
    setInLobby,
    setPlayers,
    setRoomCode,
    startGame,
} from '../../contexts/GameContext/actions';
import SocketContext from '../../contexts/SocketContext';
import PlayerForm from '../PlayerForm';
import Lobby from '../Lobby';
import UserContext from '../../contexts/UserContext';
import { setName } from '../../contexts/UserContext/actions';
import InGame from '../InGame';

const Game = ({ classes }) => {
    const { gameState, gameDispatch } = useContext(GameContext);
    const { userDispatch } = useContext(UserContext);
    const { socket } = useContext(SocketContext);

    socket &&
        socket.on('joined-room', ({ players, roomCode, name }) => {
            dispatch(gameDispatch, setPlayers(players || []));
            dispatch(gameDispatch, setInLobby());
            dispatch(gameDispatch, setRoomCode(roomCode));
            dispatch(userDispatch, setName(name));
        });

    socket &&
        socket.on('new-player', (players) => {
            dispatch(gameDispatch, setPlayers(players || []));
        });

    socket &&
        socket.on('reset-all-rooms', () => {
            dispatch(gameDispatch, resetGame());
        });

    socket &&
        socket.on('reset-room', () => {
            dispatch(gameDispatch, resetGame());
        });

    socket &&
        socket.on('game-started', () => {
            dispatch(gameDispatch, startGame());
        });

    return (
        <div className={classes.root}>
            {!gameState.inLobby && !gameState.inProgress && <PlayerForm />}
            {gameState.inLobby && !gameState.inProgress && <Lobby />}
            {gameState.inProgress && <InGame />}
        </div>
    );
};

Game.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Game);
