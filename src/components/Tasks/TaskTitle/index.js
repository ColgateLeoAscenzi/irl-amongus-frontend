import React, { useContext } from 'react';
import styles from './styles';
import { Button, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { dispatch } from '../../../contexts/utils';
import UserContext from '../../../contexts/UserContext';
import {
    setCurrentTaskId,
    setDoingTask,
} from '../../../contexts/UserContext/actions';
import SocketContext from '../../../contexts/SocketContext';
import GameContext from '../../../contexts/GameContext';

const TaskTitle = ({ classes, title }) => {
    const { userState, userDispatch } = useContext(UserContext);
    const { gameState } = useContext(GameContext);
    const { socket } = useContext(SocketContext);

    const handleClick = () => {
        dispatch(userDispatch, setCurrentTaskId('0'));
        dispatch(userDispatch, setDoingTask(false));
        socket.emit('exit-task', {
            roomCode: gameState.roomCode,
            name: userState.name,
        });
    };

    return (
        <div className={classes.titleWrapper}>
            <Typography className={classes.title}>{title}</Typography>
            <Button className={classes.dangerButton} onClick={handleClick}>
                Exit
            </Button>
        </div>
    );
};

TaskTitle.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
};

TaskTitle.defaultProps = {
    title: 'TASK_TITLE',
};

export default withStyles(styles)(TaskTitle);
