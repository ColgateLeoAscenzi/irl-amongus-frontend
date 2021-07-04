import React, { useContext, useEffect, useState } from 'react';
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
import SocketContext2 from "../../socket";
import GameContext from '../../contexts/GameContext';
import { TASK_IDS } from '../Tasks/consts';
import WinnerScreen from '../WinnerScreen';
import ActionBar from '../ActionBar';
import Meeting from '../Meeting';

const InGame = ({ classes }) => {
    const { userState, userDispatch } = useContext(UserContext);
    const { gameState } = useContext(GameContext);
    const {socket} = React.useContext(SocketContext2);
    const [noTaskError, setNoTaskError] = useState('');
    const [localSelectedTask, setLocalSelectedTask] = useState('');

    useEffect(() => {
        localSelectedTask === '' &&
            setNoTaskError('') &&
            dispatch(userDispatch, setCurrentTaskId('0')) &&
            dispatch(userDispatch, setDoingTask(false)) &&
            socket &&
            socket.emit('exit-task', {
                roomCode: gameState.roomCode,
                name: userState.name,
            });
    }, [
        localSelectedTask,
        setNoTaskError,
        gameState,
        socket,
        userState,
        userDispatch,
    ]);

    const handleInput = (e) => {
        if (!userState.isDead) {
            const selectedTask = e.target.value.toString();
            setLocalSelectedTask(selectedTask);
            if (
                (TASK_IDS.includes(selectedTask) &&
                    userState.taskList[selectedTask]) ||
                selectedTask === '911' || selectedTask === '411'
            ) {
                setNoTaskError('');
                dispatch(userDispatch, setCurrentTaskId(selectedTask));
                dispatch(userDispatch, setDoingTask(true));
                (selectedTask !== '911' && selectedTask !== '411') &&
                socket &&
                    socket.emit('start-task', {
                        roomCode: gameState.roomCode,
                        name: userState.name,
                        taskID: selectedTask,
                    });
            }
            if (
                !userState.taskList[selectedTask] &&
                selectedTask !== '' &&
                selectedTask !== '911' && selectedTask !== '411'
            ) {
                setNoTaskError(`You don't have that task`);
            }
            if (
                !TASK_IDS.includes(selectedTask) &&
                selectedTask !== '' &&
                selectedTask !== '911' && selectedTask !== '411'
            ) {
                setNoTaskError('Invalid Task Id');
            }
        }
    };

    return (
        <div className={classes.root}>
            {gameState.winner === '' && !gameState.inMeeting && (
                <div>
                    <ActionBar />
                    <Typography className={classes.title}>
                        Select A Task
                    </Typography>
                    <TextField
                        variant="outlined"
                        className={classes.input}
                        name="task"
                        onChange={handleInput}
                        placeholder="Enter a Task ID"
                    />
                </div>
            )}
            {userState.currentTask !== '0' && gameState.winner === '' && (
                <TaskWrapper />
            )}
            {gameState.winner !== '' && (
                <WinnerScreen winner={gameState.winner} />
            )}
            {noTaskError !== '' && (
                <Typography className={classes.noTaskError}>
                    {noTaskError}
                </Typography>
            )}
            {userState.isDead && (
                <Typography className={classes.noTaskError}>
                    You are Dead
                </Typography>
            )}
            {gameState.inMeeting && <Meeting />}
        </div>
    );
};

InGame.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InGame);
