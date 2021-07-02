import React, { useContext } from 'react';
import styles from './styles';
import { LinearProgress, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import GameContext from '../../../contexts/GameContext';

const TaskBar = ({ classes }) => {
    const { gameState } = useContext(GameContext);

    const normalise = (value, min, max) => {
        return ((value - min) * 100) / (max - min);
    };

    return (
        <LinearProgress
            classes={{
                root: classes.root,
                barColorPrimary: classes.barColorPrimary,
            }}
            variant="determinate"
            value={normalise(gameState.tasksCompleted, 0, gameState.totalTasks)}
        />
    );
};

TaskBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskBar);
