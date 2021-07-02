import React, { useContext, useState } from 'react';
import styles from './styles';
import { InputLabel, TextField, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SocketContext from '../../contexts/SocketContext';

const Sound = ({ classes }) => {
    const { socket } = useContext(SocketContext);

    const [localRoomCode, setLocalRoomCode] = useState('');
    const [inEmergency, setInEmergency] = useState(false);

    socket &&
        socket.once('stop-emergency-sound', () => {
            setInEmergency(false);
        });

    socket &&
        socket.once('start-emergency-sound', () => {
            setInEmergency(true);
        });

    const clickHandler = (e) => {
        e.preventDefault();
        if (localRoomCode !== '') {
            socket &&
                socket.emit('join-room-sound', {
                    roomCode: localRoomCode,
                });
        }
    };

    return (
        <div className={classes.root}>
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
                <Button
                    type="submit"
                    className={classes.buttonClass}
                    onClick={clickHandler}
                >
                    Join Room
                </Button>
            </form>
            {localRoomCode !== '' && inEmergency && (
                <Typography className={classes.stat}>EMERGENCY</Typography>
            )}
        </div>
    );
};

Sound.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sound);
