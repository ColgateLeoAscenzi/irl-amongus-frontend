import React, { useContext } from 'react';
import styles from './styles';
import { TextField, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { dispatch } from '../../contexts/utils';
import UserContext from '../../contexts/UserContext';
import {
    setCurrentTaskId,
    setDoingTask,
} from '../../contexts/UserContext/actions';
import TaskWrapper from '../Tasks/TaskWrapper';
import SocketContext from '../../contexts/SocketContext';
import GameContext from '../../contexts/GameContext';
import { TASK_IDS } from '../Tasks/consts';
import WinnerScreen from '../WinnerScreen';
import ActionBar from '../ActionBar';

const InGame = ({ classes }) => {
    const { userState, userDispatch } = useContext(UserContext);
    const { gameState } = useContext(GameContext);
    const { socket } = useContext(SocketContext);

    const handleInput = (e) => {
        const selectedTask = e.target.value.toString();

        if (
            TASK_IDS.includes(selectedTask) &&
            userState.taskList[selectedTask]
        ) {
            dispatch(userDispatch, setCurrentTaskId(selectedTask));
            dispatch(userDispatch, setDoingTask(true));
            socket &&
                socket.emit('start-task', {
                    roomCode: gameState.roomCode,
                    name: userState.name,
                    taskID: selectedTask,
                });
        }
    };

    return (
        <div className={classes.root}>
            <ActionBar />
            <Typography className={classes.title}>Select A Task</Typography>
            <TextField
                variant="outlined"
                className={classes.input}
                name="task"
                onChange={handleInput}
                placeholder="Enter a Task ID"
            />
            {userState.currentTask !== '0' && <TaskWrapper />}
            {gameState.winner !== '' && (
                <WinnerScreen winner={gameState.winner} />
            )}
        </div>
    );
};

InGame.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InGame);
