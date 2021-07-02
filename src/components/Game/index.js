import React, { useContext, useEffect, useState } from 'react';
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
    setWinner,
    setTasksCompleted,
    setTotalTasks,
    setMasterTaskList,
    setInMeeting,
    setPlayerStatuses,
    setInEmergency,
} from '../../contexts/GameContext/actions';
import SocketContext from '../../contexts/SocketContext';
import PlayerForm from '../PlayerForm';
import Lobby from '../Lobby';
import UserContext from '../../contexts/UserContext';
import {
    setName,
    setRole,
    setTaskList,
} from '../../contexts/UserContext/actions';
import InGame from '../InGame';

const Game = ({ classes }) => {
    const { gameState, gameDispatch } = useContext(GameContext);
    const { userState, userDispatch } = useContext(UserContext);
    const { socket } = useContext(SocketContext);

    const [doOnce, setDoOnce] = useState(true);

    useEffect(() => {
        if (
            gameState.inProgress &&
            Object.keys(userState.taskList).length === 0 &&
            doOnce
        ) {
            socket !== null &&
                socket.emit(
                    'get-task-list',
                    {
                        roomCode: gameState.roomCode,
                        name: userState.name,
                    },
                    (taskList) => {
                        dispatch(userDispatch, setTaskList(taskList));
                    },
                ) &&
                socket.emit(
                    'get-role',
                    {
                        roomCode: gameState.roomCode,
                        name: userState.name,
                    },
                    (role) => {
                        dispatch(userDispatch, setRole(role));
                    },
                );
            setDoOnce(false);
        }
    }, [gameState, userState, socket, doOnce, userDispatch]);
    useEffect(() => {
        if (socket) {
            socket.once('joined-room', ({ players, roomCode, name }) => {
                dispatch(gameDispatch, setPlayers(players || []));
                dispatch(gameDispatch, setInLobby());
                dispatch(gameDispatch, setRoomCode(roomCode));
                dispatch(userDispatch, setName(name));
            });

            socket.once('new-player', (players) => {
                dispatch(gameDispatch, setPlayers(players || []));
            });

            socket.once('reset-all-rooms', () => {
                dispatch(gameDispatch, resetGame());
            });

            socket.once('reset-room', () => {
                dispatch(gameDispatch, resetGame());
            });

            socket.once('game-started', ({ totalTasks, masterTaskList }) => {
                dispatch(gameDispatch, startGame());
                dispatch(gameDispatch, setTotalTasks(totalTasks));
                dispatch(gameDispatch, setMasterTaskList(masterTaskList));
            });

            socket.once('game-over', ({ winner }) => {
                dispatch(gameDispatch, setWinner(winner));
            });

            socket.once('task-update', ({ tasksComplete }) => {
                dispatch(gameDispatch, setTasksCompleted(tasksComplete));
            });

            socket.once('started-meeting', ({ playerStatuses }) => {
                dispatch(gameDispatch, setInMeeting(true));
                dispatch(gameDispatch, setPlayerStatuses(playerStatuses));
            });

            socket.once('emergency-started', () => {
                dispatch(gameDispatch, setInEmergency(true));
            });
        }
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
