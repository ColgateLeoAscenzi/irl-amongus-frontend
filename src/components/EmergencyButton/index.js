import React, { useContext } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import SocketContext from '../../contexts/SocketContext';
import GameContext from '../../contexts/GameContext';

const EmergencyButton = ({ classes }) => {
    const { gameState } = useContext(GameContext);
    const { socket } = useContext(SocketContext);

    const handleTouchStart = () => {
        socket &&
            socket.emit('stop-emergency-onPress', {
                roomCode: gameState.roomCode,
            });
    };

    const handleTouchEnd = () => {
        socket &&
            socket.emit('stop-emergency-onRelease', {
                roomCode: gameState.roomCode,
            });
    };
    return (
        <div
            className={classes.root}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            STOP EMERGENCY
        </div>
    );
};

EmergencyButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmergencyButton);
