import React, { useContext, useState } from 'react';
import styles from './styles';
import { Button, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { dispatch } from '../../contexts/utils';
import UserContext from '../../contexts/UserContext';
import SocketContext from '../../contexts/SocketContext';
import GameContext from '../../contexts/GameContext';
import { killPlayer } from '../../contexts/UserContext/actions';
import TaskListItem from '../TaskListItem';
import TaskBar from './TaskBar';

const ActionBar = ({ classes }) => {
    const { userState, userDispatch } = useContext(UserContext);
    const { gameState } = useContext(GameContext);
    const { socket } = useContext(SocketContext);

    const [taskListOpen, setTaskListOpen] = useState(false);

    const handleKill = () => {
        !userState.isDead &&
            !(userState.role === 'imposter') &&
            dispatch(userDispatch, killPlayer()) &&
            socket &&
            socket.emit('kill', {
                roomCode: gameState.roomCode,
                name: userState.name,
            });
    };

    const handleReport = () => {
        userState.isDead &&
            socket &&
            socket.emit('report', {
                roomCode: gameState.roomCode,
            });
    };

    const handleEmergency = () => {
        userState.role === 'imposter' &&
            socket &&
            socket.emit('call-emergency', {
                roomCode: gameState.roomCode,
                name: userState.name,
            });
    };

    return (
        <div className={classes.actionBarWrapper}>
            <div className={classes.taskBarWrapper}>
                <TaskBar />
            </div>
            {gameState.inEmergency && (
                <Typography className={classes.emergency}>
                    EMERGENCY!
                </Typography>
            )}
            <div className={classes.actionsWrapper}>
                <Typography
                    onClick={() => {
                        setTaskListOpen(!taskListOpen);
                    }}
                    className={classes.title}
                >
                    Task List
                </Typography>
                <div className={classes.buttonWrapper}>
                    <Button
                        className={classes.dangerButton}
                        onClick={handleKill}
                    >
                        Kill
                    </Button>
                    <Button
                        className={classes.dangerButton}
                        onClick={handleReport}
                    >
                        Report
                    </Button>
                    <Button
                        className={classes.dangerButton}
                        onClick={handleEmergency}
                    >
                        Call Emergency
                    </Button>
                </div>
            </div>
            {taskListOpen && (
                <Typography>
                    {Object.keys(userState.taskList).map((taskID, i) => {
                        return (
                            <TaskListItem
                                key={i}
                                taskName={userState.taskList[taskID].taskName}
                                taskID={taskID}
                                taskLoc={userState.taskList[taskID].taskLoc}
                                taskDesc={userState.taskList[taskID].taskDesc}
                                taskTotalParts={
                                    userState.taskList[taskID].taskTotalParts
                                }
                            />
                        );
                    })}
                </Typography>
            )}
        </div>
    );
};

ActionBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

ActionBar.defaultProps = {};

export default withStyles(styles)(ActionBar);
