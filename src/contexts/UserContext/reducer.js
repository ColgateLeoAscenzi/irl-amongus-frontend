import {
    KILL_PLAYER,
    SET_CURRENT_TASK_ID,
    SET_DOING_TASK,
    SET_NAME,
    SET_ROLE,
    SET_TASK_LIST,
    UPDATE_TASK_LIST,
} from './actions';

export const userInitialState = {
    name: '',
    isDead: false,
    role: '',
    currentTaskId: 0,
    doingTask: false,
    taskList: {},
};

export const InitUserReducer = () => userInitialState;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_NAME: {
            return {
                ...state,
                name: action.payload,
            };
        }
        case KILL_PLAYER: {
            return {
                ...state,
                isDead: true,
            };
        }
        case SET_ROLE: {
            return {
                ...state,
                role: action.payload,
            };
        }
        case SET_TASK_LIST: {
            return {
                ...state,
                taskList: action.payload,
            };
        }
        case SET_DOING_TASK: {
            return {
                ...state,
                doingTask: action.payload,
            };
        }
        case SET_CURRENT_TASK_ID: {
            return {
                ...state,
                currentTask: action.payload,
            };
        }
        case UPDATE_TASK_LIST: {
            return {
                ...state,
                taskList: action.payload,
            };
        }
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
};

export default reducer;
