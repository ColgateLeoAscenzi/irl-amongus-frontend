import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const TaskListItem = ({
    classes,
    taskID,
    taskName,
    taskLoc,
    taskDesc,
    taskTotalParts,
}) => {
    return (
        <div className={classes.root}>
            <Typography className={classes.stat}>ID: {taskID}</Typography>
            <Typography className={classes.stat}>Name: {taskName}</Typography>
            <Typography className={classes.stat}>
                Location: {taskLoc}
            </Typography>
            <Typography className={classes.stat}>
                Description: {taskDesc}
            </Typography>
            <Typography className={classes.stat}>
                Part: 0/{taskTotalParts}
            </Typography>
        </div>
    );
};

TaskListItem.propTypes = {
    classes: PropTypes.object.isRequired,
    taskID: PropTypes.string.isRequired,
    taskName: PropTypes.string.isRequired,
    taskLoc: PropTypes.string.isRequired,
    taskDesc: PropTypes.string.isRequired,
    taskTotalParts: PropTypes.string.isRequired,
};

export default withStyles(styles)(TaskListItem);
