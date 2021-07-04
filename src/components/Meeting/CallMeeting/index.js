import React, { useContext } from 'react';
import styles from './styles';
import {Button, withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import GameContext from '../../../contexts/GameContext';
import useSound from "use-sound";
import meetingSfx from "../../../assets/sound/emergency-meeting.mp3";
import SocketContext2 from "../../../socket";

const CallMeeting = ({ classes }) => {
    const { gameState } = useContext(GameContext);
    const {socket} = React.useContext(SocketContext2);
    const [playMeeting] = useSound(meetingSfx);

    const handlePress = () => {
        socket &&
            socket.emit('start-meeting', {
                roomCode: gameState.roomCode,
            });
        playMeeting();
    };

    return (
        <div>
        {!gameState.inMeeting && (
            <Button
                className={classes.statusButton}
                onClick={handlePress}
            >
                CALL MEETING
            </Button>)
        }</div>
    );
};

CallMeeting.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CallMeeting);
