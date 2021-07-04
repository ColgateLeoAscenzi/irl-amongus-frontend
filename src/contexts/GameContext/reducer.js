import {
    RESET_GAME,
    SET_IN_LOBBY,
    SET_IN_MEETING,
    SET_IN_EMERGENCY,
    SET_PLAYERS,
    SET_ROOM_CODE,
    SET_TOTAL_TASKS,
    SET_WINNER,
    START_GAME,
    SET_TASKS_COMPLETED,
    SET_MASTER_TASK_LIST,
    SET_PLAYER_STATUSES, SET_VOTE_LIST,
} from './actions';

export const gameInitialState = {
    inProgress: false,
    inLobby: false,
    inMeeting: false,
    inEmergency: false,
    roomCode: '',
    players: [],
    playerStatuses: [],
    tasksCompleted: 0,
    totalTasks: -1,
    winner: '',
    masterTaskList: {},
    voteList: [],
};

export const InitGameReducer = () => gameInitialState;

const reducer = (state, action) => {
    switch (action.type) {
        case START_GAME: {
            return {
                ...state,
                inProgress: true,
            };
        }
        case SET_ROOM_CODE: {
            return {
                ...state,
                roomCode: action.payload,
            };
        }
        case SET_IN_LOBBY: {
            return {
                ...state,
                inLobby: true,
            };
        }
        case SET_IN_MEETING: {
            return {
                ...state,
                inMeeting: action.payload,
            };
        }
        case SET_IN_EMERGENCY: {
            return {
                ...state,
                inEmergency: action.payload,
            };
        }
        case SET_PLAYERS: {
            return {
                ...state,
                players: action.payload,
            };
        }
        case SET_PLAYER_STATUSES: {
            return {
                ...state,
                playerStatuses: action.payload,
            };
        }
        case SET_TASKS_COMPLETED: {
            return {
                ...state,
                tasksCompleted: action.payload,
            };
        }
        case SET_MASTER_TASK_LIST: {
            return {
                ...state,
                masterTaskList: action.payload,
            };
        }
        case SET_TOTAL_TASKS: {
            return {
                ...state,
                totalTasks: action.payload,
            };
        }
        case SET_WINNER: {
            return {
                ...state,
                winner: action.payload,
            };
        }
        case SET_VOTE_LIST: {
            return {
                ...state,
                voteList: action.payload,
            }
        }
        case RESET_GAME: {
            return {
                gameInitialState,
            };
        }
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
};

export default reducer;
