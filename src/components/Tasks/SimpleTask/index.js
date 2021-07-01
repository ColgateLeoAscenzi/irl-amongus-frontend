import React, { useContext } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { dispatch } from '../../../contexts/utils';
import {
    setCurrentTaskId,
    setDoingTask,
} from '../../../contexts/UserContext/actions';
import UserContext from '../../../contexts/UserContext';
import GameContext from '../../../contexts/GameContext';
import SocketContext from '../../../contexts/SocketContext';
import TaskTitle from '../TaskTitle';

const SimpleTask = ({ classes, taskID }) => {
    const [checked, setChecked] = React.useState(false);

    const { userState, userDispatch } = useContext(UserContext);
    const { gameState } = useContext(GameContext);
    const { socket } = useContext(SocketContext);

    const handleChange = () => {
        setChecked(!checked);
        dispatch(userDispatch, setCurrentTaskId('0'));
        dispatch(userDispatch, setDoingTask(false));
        socket &&
            socket.emit('finish-task', {
                roomCode: gameState.roomCode,
                name: userState.name,
                taskID: taskID,
            });
    };

    return (
        <div className={classes.root}>
            <TaskTitle title={gameState.masterTaskList[taskID].taskName} />
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            name="checkedTask"
                            className={classes.checkboxOutline}
                        />
                    }
                    label="Check if completed IRL task"
                />
            </FormGroup>
        </div>
    );
};

SimpleTask.propTypes = {
    classes: PropTypes.object.isRequired,
    taskID: PropTypes.string.isRequired,
};

export default withStyles(styles)(SimpleTask);
