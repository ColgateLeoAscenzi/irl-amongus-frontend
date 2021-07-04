export const PREFIX = 'user/';
export const SET_NAME = `${PREFIX}SET_NAME`;
export const SET_ROLE = `${PREFIX}SET_ROLE`;
export const SET_TASK_LIST = `${PREFIX}SET_TASK_LIST`;
export const SET_DOING_TASK = `${PREFIX}SET_DOING_TASK`;
export const SET_CURRENT_TASK_ID = `${PREFIX}SET_CURRENT_TASK_ID`;
export const KILL_PLAYER = `${PREFIX}KILL_PLAYER`;
export const SET_SHOW_ROLE_POPUP = `${PREFIX}SET_SHOW_ROLE_POPUP`;

export const setName = (name) => ({
    type: SET_NAME,
    payload: name,
});

export const setRole = (role) => ({
    type: SET_ROLE,
    payload: role,
});

export const setTaskList = (taskList) => ({
    type: SET_TASK_LIST,
    payload: taskList,
});

export const setDoingTask = (isDoingTask) => ({
    type: SET_DOING_TASK,
    payload: isDoingTask,
});

export const setCurrentTaskId = (taskID) => ({
    type: SET_CURRENT_TASK_ID,
    payload: taskID,
});

export const killPlayer = () => ({
    type: KILL_PLAYER,
});

export const setShowRolePopup = (show) => ({
    type: SET_SHOW_ROLE_POPUP,
    payload: show,
})
