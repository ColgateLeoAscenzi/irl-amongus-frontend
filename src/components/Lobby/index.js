import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import GameContext from '../../contexts/GameContext';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SocketContext2 from "../../socket";

const Lobby = ({ classes }) => {
    const { gameState } = useContext(GameContext);
    const {socket} = React.useContext(SocketContext2);
    const startGame = () => {
        socket && socket.emit('start-game', { roomCode: gameState.roomCode });
    };

    return (
        <div className={classes.container}>
            <Typography className={classes.title}>
                Players ({gameState.players.length})
            </Typography>
            <div className={classes.listContainer}>
                {gameState.players &&
                    gameState.players.map((player, i) => (
                        <div className={classes.playerBox} key={i}>
                            {player?.name}
                        </div>
                    ))}
            </div>
            <Button onClick={startGame} className={classes.buttonClass}>
                Start Game!
            </Button>
        </div>
    );
};

Lobby.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Lobby);
