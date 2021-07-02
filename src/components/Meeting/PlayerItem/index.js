import React, { useContext } from 'react';
import styles from './styles';
import { Button, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import SocketContext from '../../../contexts/SocketContext';
import GameContext from '../../../contexts/GameContext';

const PlayerItem = ({ classes, name, isDead, voted, setVoted }) => {
    const { gameState } = useContext(GameContext);
    const { socket } = useContext(SocketContext);

    const handleClick = () => {
        !voted &&
            socket &&
            socket.emit('vote', {
                roomCode: gameState.roomCode,
                name: name,
            });
        setVoted(true);
    };

    return (
        <div className={classes.titleWrapper}>
            <Typography className={classes.title}>{name}</Typography>
            {isDead && <Typography className={classes.title}>Dead</Typography>}
            {!isDead && !voted && (
                <Button className={classes.voteButton} onClick={handleClick}>
                    Vote
                </Button>
            )}
        </div>
    );
};

PlayerItem.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string,
    isDead: PropTypes.bool,
    voted: PropTypes.bool.isRequired,
    setVoted: PropTypes.func.isRequired,
};

PlayerItem.defaultProps = {
    name: '',
    isDead: false,
};

export default withStyles(styles)(PlayerItem);
