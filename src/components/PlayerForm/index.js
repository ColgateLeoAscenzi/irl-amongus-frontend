import React, { useContext, useState } from 'react';
import {
    InputLabel,
    TextField,
    Typography,
    withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import UserContext from '../../contexts/UserContext';
import styles from './styles';
import SocketContext2 from "../../socket";

const PlayerForm = ({ classes }) => {
    const { userState } = useContext(UserContext);
    const {socket} = React.useContext(SocketContext2);
    const [localRoomCode, setLocalRoomCode] = useState('');
    const [localName, setLocalName] = useState('');
    const [nameErrors, setNameErrors] = useState('');

    socket &&
        socket.once('name-taken', (name) => {
            setNameErrors(`${name} Already in Lobby`);
        });

    const clickHandler = (e) => {
        e.preventDefault();
        if (localName === '') {
            if (userState.name !== '') {
                socket &&
                    socket.emit('create-room', {
                        roomCode: localRoomCode,
                        name: userState.name,
                    });
            } else {
                setNameErrors('Name Is Required');
            }
        } else {
            socket &&
                socket.emit('create-room', {
                    roomCode: localRoomCode,
                    name: localName,
                });
        }
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
                            setNameErrors('');
                            setLocalName(e.target.value);
                        }}
                        placeholder={
                            userState.name !== '' ? userState.name : ''
                        }
                    />
                    {nameErrors !== '' && (
                        <Typography className={classes.error}>
                            {nameErrors}
                        </Typography>
                    )}
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
