export const PREFIX = 'game/';
export const START_GAME = `${PREFIX}START_GAME`;
export const RESET_GAME = `${PREFIX}RESET_GAME`;
export const SET_ROOM_CODE = `${PREFIX}SET_ROOM_CODE`;
export const SET_IN_LOBBY = `${PREFIX}SET_IN_LOBBY`;
export const SET_PLAYERS = `${PREFIX}SET_PLAYERS`;

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

export const setPlayers = (players) => ({
    type: SET_PLAYERS,
    payload: players,
});
