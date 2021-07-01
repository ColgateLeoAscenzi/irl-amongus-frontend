import React, { useContext } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import UserContext from '../../../contexts/UserContext';
import MonitorTreeTask from '../MonitorTreeTask';
import {
    ALIGN_TELESCOPE_TASK_ID,
    ASSEMBLE_THE_ARTIFACT_TASK_ID,
    BUY_BEVERAGE_TASK_ID,
    CHART_COURSE_TASK_ID,
    CLEAN_O2_FILTER_TASK_ID,
    DECONTAMINATE_TASK_ID,
    ENTER_ID_CODE_TASK_ID,
    FUEL_ENGINES_TASK_ID,
    MAZE_TASK_ID,
    MEASURE_WEATHER_TASK_ID,
    MEDBAY_SCAN_TASK_ID,
    MONITOR_TREE_TASK_ID,
    O2_CANISTERS_TASK_ID,
    PADLOCK_TASK_ID,
    PRIME_SHIELDS_TASK_ID,
    PROCESS_DATA_TASK_ID,
    RECORD_TEMPERATURE_TASK_ID,
    SORT_SAMPLES_TASK_ID,
    START_FANS_TASK_ID,
    WIRES_TASK_ID,
} from '../consts';
import SimpleTask from '../SimpleTask';

const TaskWrapper = ({ classes }) => {
    const { userState } = useContext(UserContext);

    return (
        <div className={classes.root}>
            {userState.currentTask === WIRES_TASK_ID && (
                <SimpleTask taskID={WIRES_TASK_ID} />
            )}
            {userState.currentTask === O2_CANISTERS_TASK_ID && (
                <SimpleTask taskID={O2_CANISTERS_TASK_ID} />
            )}
            {userState.currentTask === ALIGN_TELESCOPE_TASK_ID && (
                <SimpleTask taskID={ALIGN_TELESCOPE_TASK_ID} />
            )}
            {userState.currentTask === ASSEMBLE_THE_ARTIFACT_TASK_ID && (
                <SimpleTask taskID={ASSEMBLE_THE_ARTIFACT_TASK_ID} />
            )}
            {userState.currentTask === BUY_BEVERAGE_TASK_ID && (
                <SimpleTask taskID={BUY_BEVERAGE_TASK_ID} />
            )}
            {userState.currentTask === MEDBAY_SCAN_TASK_ID && (
                <SimpleTask taskID={MEDBAY_SCAN_TASK_ID} />
            )}
            {userState.currentTask === MAZE_TASK_ID && (
                <SimpleTask taskID={MAZE_TASK_ID} />
            )}
            {userState.currentTask === CHART_COURSE_TASK_ID && (
                <SimpleTask taskID={CHART_COURSE_TASK_ID} />
            )}
            {userState.currentTask === CLEAN_O2_FILTER_TASK_ID && (
                <SimpleTask taskID={CLEAN_O2_FILTER_TASK_ID} />
            )}
            {userState.currentTask === DECONTAMINATE_TASK_ID && (
                <SimpleTask taskID={DECONTAMINATE_TASK_ID} />
            )}
            {userState.currentTask === ENTER_ID_CODE_TASK_ID && (
                <SimpleTask taskID={ENTER_ID_CODE_TASK_ID} />
            )}
            {userState.currentTask === FUEL_ENGINES_TASK_ID && (
                <SimpleTask taskID={FUEL_ENGINES_TASK_ID} />
            )}
            {userState.currentTask === MEASURE_WEATHER_TASK_ID && (
                <SimpleTask taskID={MEASURE_WEATHER_TASK_ID} />
            )}
            {userState.currentTask === PRIME_SHIELDS_TASK_ID && (
                <SimpleTask taskID={PRIME_SHIELDS_TASK_ID} />
            )}
            {userState.currentTask === PROCESS_DATA_TASK_ID && (
                <SimpleTask taskID={PROCESS_DATA_TASK_ID} />
            )}
            {userState.currentTask === RECORD_TEMPERATURE_TASK_ID && (
                <SimpleTask taskID={RECORD_TEMPERATURE_TASK_ID} />
            )}
            {userState.currentTask === SORT_SAMPLES_TASK_ID && (
                <SimpleTask taskID={SORT_SAMPLES_TASK_ID} />
            )}
            {userState.currentTask === START_FANS_TASK_ID && (
                <SimpleTask taskID={START_FANS_TASK_ID} />
            )}
            {userState.currentTask === PADLOCK_TASK_ID && (
                <SimpleTask taskID={PADLOCK_TASK_ID} />
            )}
            {userState.currentTask === MONITOR_TREE_TASK_ID && (
                <MonitorTreeTask />
            )}
        </div>
    );
};

TaskWrapper.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskWrapper);
