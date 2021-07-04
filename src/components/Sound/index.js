import React, { useState } from 'react';
import styles from './styles';
import { InputLabel, TextField, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useSound from 'use-sound';
import emergencySfx from '../../assets/sound/reactor-loop.mp3';
import SocketContext2 from "../../socket";

const Sound = ({ classes }) => {
    const {socket} = React.useContext(SocketContext2);
    const [localRoomCode, setLocalRoomCode] = useState('');
    const [joinedRoom, setJoinedRoom] = useState(false);
    const [inEmergency, setInEmergency] = useState(false);

    const [playEmergency, { stop: stopEmergency }] = useSound(emergencySfx, {loop: true});

    socket &&
        socket.once('stop-emergency-sound', () => {
            setInEmergency(false);
            stopEmergency();
        });

    socket &&
        socket.once('start-emergency-sound', () => {
            setInEmergency(true);
            playEmergency();
        });

    const clickHandler = (e) => {
        e.preventDefault();
        if (localRoomCode !== '') {
            socket &&
                socket.emit('join-room-sound', {
                    roomCode: localRoomCode,
                });
            setJoinedRoom(true);
        }
    };

    return (
        <div className={classes.root}>
            {!joinedRoom && (<form className={classes.formContainer} autoComplete="off">
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
            </form>)}
            {joinedRoom && (<Typography className={classes.stat}>Waiting for Sounds in Room: {localRoomCode}</Typography>)}
            {localRoomCode !== '' && inEmergency && (
                <Typography className={classes.emergency}>EMERGENCY</Typography>
            )}
        </div>
    );
};

Sound.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sound);
