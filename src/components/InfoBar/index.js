import React, { useContext } from 'react';
import styles from './styles.js';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import UserContext from '../../contexts/UserContext';
import GameContext from '../../contexts/GameContext';

const InfoBar = ({ classes }) => {
    const { userState } = useContext(UserContext);
    const { gameState } = useContext(GameContext);

    return (
        <div className={classes.root}>
            <Typography className={classes.nameContainer}>
                {userState?.name || 'Name'}
            </Typography>
            <Typography className={classes.roomContainer}>
                {gameState?.roomCode || 'Room'}
            </Typography>
        </div>
    );
};

InfoBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoBar);
