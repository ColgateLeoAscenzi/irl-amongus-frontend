import {
    RESET_GAME,
    SET_IN_LOBBY,
    SET_PLAYERS,
    SET_ROOM_CODE,
    START_GAME,
} from './actions';

export const gameInitialState = {
    gameStarted: false,
    inLobby: false,
    roomCode: '',
    players: [],
};

export const InitGameReducer = () => gameInitialState;

const reducer = (state, action) => {
    switch (action.type) {
        case START_GAME: {
            return {
                ...state,
                gameStarted: true,
            };
        }
        case RESET_GAME: {
            return {
                gameInitialState,
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
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
};

export default reducer;
