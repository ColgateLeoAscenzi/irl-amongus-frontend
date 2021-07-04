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
    setVoteList,
} from '../../contexts/GameContext/actions';
import SocketContext2 from "../../socket";
import PlayerForm from '../PlayerForm';
import Lobby from '../Lobby';
import UserContext from '../../contexts/UserContext';
import {
    killPlayer,
    setName,
    setRole, setShowRolePopup,
    setTaskList,
} from '../../contexts/UserContext/actions';
import InGame from '../InGame';
import useSound from 'use-sound';
import lobbySfx from '../../assets/sound/enter-lobby.mp3';

const Game = ({ classes }) => {
    const { gameState, gameDispatch } = useContext(GameContext);
    const { userState, userDispatch } = useContext(UserContext);

    const {socket} = React.useContext(SocketContext2);

    const [doOnce, setDoOnce] = useState(true);
    const [playJoinLobby] = useSound(lobbySfx);


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
                        dispatch(userDispatch, setShowRolePopup(true));
                    },
                );
            setDoOnce(false);
        }
    }, [gameState, userState, socket, doOnce, userDispatch]);
    useEffect(() => {
        if (socket) {
            socket.on('joined-room', ({ players, roomCode, name }) => {
                dispatch(gameDispatch, setPlayers(players || []));
                dispatch(gameDispatch, setInLobby());
                dispatch(gameDispatch, setRoomCode(roomCode));
                dispatch(userDispatch, setName(name));
                playJoinLobby();
            });

            socket.on('new-player', (players) => {
                dispatch(gameDispatch, setPlayers(players || []));
            });

            socket.on('reset-all-rooms', () => {
                dispatch(gameDispatch, resetGame());
            });

            socket.on('reset-room', () => {
                dispatch(gameDispatch, resetGame());
            });

            socket.on('game-started', ({ totalTasks, masterTaskList }) => {
                dispatch(gameDispatch, startGame());
                dispatch(gameDispatch, setTotalTasks(totalTasks));
                dispatch(gameDispatch, setMasterTaskList(masterTaskList));
            });

            socket.on('game-over', ({ winner }) => {
                dispatch(gameDispatch, setWinner(winner));
            });

            socket.on('task-update', ({ tasksComplete }) => {
                dispatch(gameDispatch, setTasksCompleted(tasksComplete));
            });

            socket.on('started-meeting', ({ playerStatuses }) => {
                dispatch(gameDispatch, setInMeeting(true));
                dispatch(gameDispatch, setPlayerStatuses(playerStatuses));
            });

            socket.on('emergency-started', () => {
                dispatch(gameDispatch, setInEmergency(true));
            });

            socket.on('meeting-ended', ({killedPlayer}) => {
                if(userState.name === killedPlayer) {
                    dispatch(userDispatch, killPlayer());
                }
                dispatch(gameDispatch, setInMeeting(false));
            });

            socket.on('final-votes', ({voteList}) => {
                dispatch(gameDispatch, setVoteList(voteList));
            })
        }
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
