import React, { useContext, useState } from 'react';
import { InputLabel, TextField, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { dispatch } from '../../contexts/utils';
import { setName } from '../../contexts/UserContext/actions';
import { setRoomCode } from '../../contexts/GameContext/actions';
import UserContext from '../../contexts/UserContext';
import GameContext from '../../contexts/GameContext';
import SocketContext from '../../contexts/SocketContext';
import styles from './styles';

const PlayerForm = ({ classes }) => {
    const { userDispatch } = useContext(UserContext);
    const { gameDispatch } = useContext(GameContext);
    const { socket } = useContext(SocketContext);

    const [localRoomCode, setLocalRoomCode] = useState('');
    const [localName, setLocalName] = useState('');

    const clickHandler = (e) => {
        e.preventDefault();
        socket &&
            socket.emit('create-room', {
                roomcode: localRoomCode,
                name: localName,
            });
        dispatch(userDispatch, setName(localName));
        dispatch(gameDispatch, setRoomCode(localRoomCode));
    };

    return (
        <div>
            <form className={classes.formContainer} autoComplete="off">
                <div className={classes.inputContainer}>
                    <InputLabel className={classes.label}>
                        Enter a Room Code
                    </InputLabel>
                    <TextField
                        className={classes.input}
                        variant="outlined"
                        onChange={(e) => {
                            setLocalRoomCode(e.target.value);
                        }}
                    />
                </div>
                <div className={classes.inputContainer}>
                    <InputLabel className={classes.label}>
                        Enter a Name
                    </InputLabel>
                    <TextField
                        variant="outlined"
                        className={classes.input}
                        name="name"
                        onChange={(e) => {
                            setLocalName(e.target.value);
                        }}
                    />
                    `
                </div>
                <Button
                    type="submit"
                    className={classes.buttonClass}
                    onClick={clickHandler}
                >
                    Join Room
                </Button>
            </form>
        </div>
    );
};

PlayerForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlayerForm);
