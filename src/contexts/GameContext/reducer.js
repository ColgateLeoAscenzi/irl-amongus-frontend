import {
    RESET_GAME,
    SET_IN_LOBBY,
    SET_PLAYERS,
    SET_ROOM_CODE,
    START_GAME,
} from './actions';

export const gameInitialState = {
    inProgress: false,
    inLobby: false,
    roomCode: '',
    players: [],
    tasksCompleted: 0,
    totalTasks: 56,
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
        case SET_PLAYERS: {
            return {
                ...state,
                players: action.payload,
            };
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
