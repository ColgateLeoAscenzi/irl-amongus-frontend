import React, { useState } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Input, InputLabel } from '@material-ui/core';

const Game = ({ classes, socket }) => {
    /**
     * socket && socket.on("new-player", data => {
     *   console.log(`Room players: ${data}`);
     * });
     */

    const [roomCode, setRoomCode] = useState('');
    const [name, setName] = useState('');

    const clickHandler = () => {
        socket &&
            socket.emit('create-room', { roomcode: roomCode, name: name });
    };

    return (
        <div className={classes.root}>
            <InputLabel>Enter a Roomcode</InputLabel>
            <Input
                name="room"
                onChange={(e) => {
                    setRoomCode(e.target.value);
                }}
            ></Input>
            <InputLabel>Enter a Name</InputLabel>
            <Input
                name="name"
                onChange={(e) => {
                    setName(e.target.value);
                }}
            ></Input>
            <Button className={classes.buttonClass} onClick={clickHandler}>
                Join Room
            </Button>
        </div>
    );
};

Game.propTypes = {
    classes: PropTypes.object.isRequired,
    socket: PropTypes.any.isRequired,
};

Game.defaultProps = {};

export default withStyles(styles)(Game);
