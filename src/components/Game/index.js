import React, { useContext } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { dispatch } from '../../contexts/utils';
import GameContext from '../../contexts/GameContext';
import {
    resetGame,
    setInLobby,
    setPlayers,
} from '../../contexts/GameContext/actions';
import SocketContext from '../../contexts/SocketContext';
import PlayerForm from '../PlayerForm';

const Game = ({ classes }) => {
    const { gameState, gameDispatch } = useContext(GameContext);
    const { socket } = useContext(SocketContext);

    socket &&
        socket.on('joined-room', (players) => {
            dispatch(gameDispatch, setPlayers(players || []));
            dispatch(gameDispatch, setInLobby());
        });

    socket &&
        socket.on('new-player', (players) => {
            dispatch(gameDispatch, setPlayers(players || []));
        });

    socket &&
        socket.on('reset-all-rooms', () => {
            dispatch(gameDispatch, resetGame());
        });

    return (
        <div className={classes.root}>
            {gameState?.inLobby ? (
                <div>
                    <div>Players:</div>
                    <ul>
                        {gameState.players &&
                            gameState.players.map((player, i) => (
                                <li key={i}>{player?.name}</li>
                            ))}
                    </ul>
                </div>
            ) : (
                <PlayerForm />
            )}
        </div>
    );
};

Game.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Game);
