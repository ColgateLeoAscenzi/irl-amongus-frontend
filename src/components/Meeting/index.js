import React, { useContext, useState } from 'react';
import styles from './styles';
import { Button, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import GameContext from '../../contexts/GameContext';
import PlayerItem from './PlayerItem';
import SocketContext from '../../contexts/SocketContext';
import UserContext from '../../contexts/UserContext';

const Meeting = ({ classes }) => {
    const { gameState } = useContext(GameContext);
    const { socket } = useContext(SocketContext);
    const { userState } = useContext(UserContext);

    const [voted, setVoted] = useState(false);

    const handleEndMeeting = () => {
        !userState.isDead &&
            socket &&
            socket.emit('end-meeting', {
                roomCode: gameState.roomCode,
            });
    };

    return (
        <div className={classes.playerListWrapper}>
            {gameState.playerStatuses.map((player, i) => {
                return (
                    <PlayerItem
                        key={i}
                        name={player.name}
                        voted={voted}
                        setVoted={setVoted}
                        isDead={player.isDead}
                    />
                );
            })}
            <Button className={classes.dangerButton} onClick={handleEndMeeting}>
                End Meeting
            </Button>
        </div>
    );
};

Meeting.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Meeting);
