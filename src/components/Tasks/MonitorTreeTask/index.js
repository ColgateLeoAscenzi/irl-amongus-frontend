import React, { useContext, useEffect, useState } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import MonitorSlider from './MonitorSlider';
import {
    DEFAULT_THRESHHOLD,
    SLIDER_TYPE_CO2,
    SLIDER_TYPE_NUTRI,
    SLIDER_TYPE_RAD,
    SLIDER_TYPE_WATER,
} from './consts';
import { checkClose } from './utils';
import TaskTitle from '../TaskTitle';
import { dispatch } from '../../../contexts/utils';
import {
    setCurrentTaskId,
    setDoingTask,
} from '../../../contexts/UserContext/actions';
import UserContext from '../../../contexts/UserContext';
import GameContext from '../../../contexts/GameContext';
import { MONITOR_TREE_TASK_ID } from '../consts';
import SocketContext2 from "../../../socket";

const MonitorTreeTask = ({ classes }) => {
    const { userState, userDispatch } = useContext(UserContext);
    const { gameState } = useContext(GameContext);
    const {socket} = React.useContext(SocketContext2);
    // initialize target values once on load
    const [randomInts, setRandomInts] = useState([0, 0, 0, 0]);
    useEffect(() => {
        setRandomInts([
            Math.floor(Math.random() * 99),
            Math.floor(Math.random() * 99),
            Math.floor(Math.random() * 99),
            Math.floor(Math.random() * 99),
        ]);
    }, [setRandomInts]);

    // getters and setters for each slider
    const [CO2Value, setCO2Value] = useState(5);
    const [nutriValue, setNutriValue] = useState(50);
    const [radValue, setRadValue] = useState(5);
    const [waterValue, setWaterValue] = useState(75);

    // track task completion, task is complete when all are within a range
    const [taskComplete, setTaskComplete] = useState(false);

    useEffect(() => {
        setTaskComplete(
            checkClose(randomInts[0], CO2Value, DEFAULT_THRESHHOLD) &&
                checkClose(randomInts[1], nutriValue, DEFAULT_THRESHHOLD) &&
                checkClose(randomInts[2], radValue, DEFAULT_THRESHHOLD) &&
                checkClose(randomInts[3], waterValue, DEFAULT_THRESHHOLD),
        );
        taskComplete && dispatch(userDispatch, setCurrentTaskId('0'));
        taskComplete && dispatch(userDispatch, setDoingTask(false));
        taskComplete &&
            socket &&
            socket.emit('finish-task', {
                roomCode: gameState.roomCode,
                name: userState.name,
                taskID: MONITOR_TREE_TASK_ID,
            });
    }, [
        CO2Value,
        nutriValue,
        radValue,
        waterValue,
        taskComplete,
        userDispatch,
        randomInts,
        socket,
        gameState,
        userState,
    ]);

    return (
        <div className={classes.root}>
            <TaskTitle title="Monitor Tree" />
            <div className={classes.sliderContainer}>
                <MonitorSlider
                    setTargetValue={setCO2Value}
                    sliderType={SLIDER_TYPE_CO2}
                    defaultValue={5}
                    marks={[{ value: randomInts[0] }]}
                    step={1}
                />
                <MonitorSlider
                    setTargetValue={setNutriValue}
                    sliderType={SLIDER_TYPE_NUTRI}
                    defaultValue={50}
                    marks={[{ value: randomInts[1] }]}
                    step={1}
                />
                <MonitorSlider
                    setTargetValue={setRadValue}
                    sliderType={SLIDER_TYPE_RAD}
                    defaultValue={5}
                    marks={[{ value: randomInts[2] }]}
                    step={1}
                />
                <MonitorSlider
                    setTargetValue={setWaterValue}
                    sliderType={SLIDER_TYPE_WATER}
                    defaultValue={75}
                    marks={[{ value: randomInts[3] }]}
                    step={1}
                />
            </div>
        </div>
    );
};

MonitorTreeTask.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MonitorTreeTask);
