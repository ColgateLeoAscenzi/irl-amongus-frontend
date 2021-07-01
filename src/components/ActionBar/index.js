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

const ActionBar = ({ classes }) => {
    const { userState, userDispatch } = useContext(UserContext);
    const { gameState } = useContext(GameContext);
    const { socket } = useContext(SocketContext);

    const [taskListOpen, setTaskListOpen] = useState(false);

    const handleKill = () => {
        dispatch(userDispatch, killPlayer);
        socket &&
            socket.emit('kill', {
                roomCode: gameState.roomCode,
                name: userState.name,
            });
    };

    const handleReport = () => {
        socket &&
            socket.emit('report', {
                roomCode: gameState.roomCode,
                name: userState.name,
            });
    };

    return (
        <div className={classes.actionBarWrapper}>
            <div className={classes.actionsWrapper}>
                <div
                    onClick={() => {
                        setTaskListOpen(!taskListOpen);
                    }}
                    className={classes.title}
                >
                    Task List
                </div>
                <Button className={classes.dangerButton} onClick={handleKill}>
                    Kill
                </Button>
                <Button className={classes.dangerButton} onClick={handleReport}>
                    Report
                </Button>
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
