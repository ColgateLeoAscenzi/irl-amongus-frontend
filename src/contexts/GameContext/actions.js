export const PREFIX = 'game/';
export const START_GAME = `${PREFIX}START_GAME`;
export const RESET_GAME = `${PREFIX}RESET_GAME`;
export const SET_ROOM_CODE = `${PREFIX}SET_ROOM_CODE`;
export const SET_IN_LOBBY = `${PREFIX}SET_IN_LOBBY`;
export const SET_IN_MEETING = `${PREFIX}SET_IN_MEETING`;
export const SET_IN_EMERGENCY = `${PREFIX}SET_IN_EMERGENCY`;
export const SET_PLAYERS = `${PREFIX}SET_PLAYERS`;
export const SET_PLAYER_STATUSES = `${PREFIX}SET_PLAYER_STATUSES`;
export const SET_WINNER = `${PREFIX}SET_WINNER`;
export const SET_TOTAL_TASKS = `${PREFIX}SET_TOTAL_TASKS`;
export const SET_TASKS_COMPLETED = `${PREFIX}SET_TASKS_COMPLETED`;
export const SET_MASTER_TASK_LIST = `${PREFIX}SET_MASTER_TASK_LIST`;

export const startGame = () => ({
    type: START_GAME,
});

export const resetGame = () => ({
    type: RESET_GAME,
});

export const setRoomCode = (roomCode) => ({
    type: SET_ROOM_CODE,
    payload: roomCode,
});

export const setInLobby = () => ({
    type: SET_IN_LOBBY,
});

export const setInMeeting = (inMeeting) => ({
    type: SET_IN_MEETING,
    payload: inMeeting,
});

export const setInEmergency = (inEmergency) => ({
    type: SET_IN_EMERGENCY,
    payload: inEmergency,
});

export const setPlayers = (players) => ({
    type: SET_PLAYERS,
    payload: players,
});
export const setPlayerStatuses = (playerStatuses) => ({
    type: SET_PLAYER_STATUSES,
    payload: playerStatuses,
});

export const setWinner = (winner) => ({
    type: SET_WINNER,
    payload: winner,
});

export const setTotalTasks = (totalTasks) => ({
    type: SET_TOTAL_TASKS,
    payload: totalTasks,
});

export const setTasksCompleted = (tasksCompleted) => ({
    type: SET_TASKS_COMPLETED,
    payload: tasksCompleted,
});

export const setMasterTaskList = (taskList) => ({
    type: SET_MASTER_TASK_LIST,
    payload: taskList,
});
