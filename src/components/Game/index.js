import React, { useContext, useState } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Input, InputLabel } from '@material-ui/core';
import { dispatch } from '../../contexts/utils';
import UserContext from '../../contexts/UserContext';
import GameContext from '../../contexts/GameContext';
import { setName } from '../../contexts/UserContext/actions';
import {
    resetGame,
    setInLobby,
    setPlayers,
    setRoomCode,
} from '../../contexts/GameContext/actions';
import SocketContext from '../../contexts/SocketContext';

const Game = ({ classes }) => {
    const { userState, userDispatch } = useContext(UserContext);
    const { gameState, gameDispatch } = useContext(GameContext);
    const { socket } = useContext(SocketContext);

    socket &&
        socket.on('joined-room', (players) => {
            dispatch(gameDispatch, setPlayers(players || []));
            dispatch(gameDispatch, setInLobby());
        });

    socket &&
        socket.on('new-player', (players) => {
            dispatch(gameDispatch, setPlayers(players || []));
        });

    socket &&
        socket.on('reset-all-rooms', () => {
            dispatch(gameDispatch, resetGame());
        });

    const [localRoomCode, setLocalRoomCode] = useState('');
    const [localName, setLocalName] = useState('');

    const clickHandler = () => {
        socket &&
            socket.emit('create-room', {
                roomcode: localRoomCode,
                name: localName,
            });
        dispatch(userDispatch, setName(localName));
        dispatch(gameDispatch, setRoomCode(localRoomCode));
    };

    return (
        <div className={classes.root}>
            {gameState?.inLobby ? (
                <div>
                    <div className={classes.gameInfo}>
                        <div>Name: {userState?.name}</div>
                        <div>Room: {gameState?.roomCode}</div>
                    </div>
                    <div>Players:</div>
                    <ul>
                        {gameState.players &&
                            gameState.players.map((player, i) => (
                                <li key={i}>{player?.name}</li>
                            ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <div className={classes.gameInfo}>
                        <div>Name: {userState?.name}</div>
                        <div>Room: {gameState?.roomCode}</div>
                    </div>
                    <InputLabel>Enter a Room Code</InputLabel>
                    <Input
                        name="room"
                        onChange={(e) => {
                            setLocalRoomCode(e.target.value);
                        }}
                    />
                    <InputLabel>Enter a Name</InputLabel>
                    <Input
                        name="name"
                        onChange={(e) => {
                            setLocalName(e.target.value);
                        }}
                    />
                    <Button
                        className={classes.buttonClass}
                        onClick={clickHandler}
                    >
                        Join Room
                    </Button>
                </div>
            )}
        </div>
    );
};

Game.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Game);
