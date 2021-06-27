export const PREFIX = 'user/';
export const SET_NAME = `${PREFIX}SET_NAME`;
export const SET_ROLE = `${PREFIX}SET_ROLE`;

export const setName = (name) => ({
    type: SET_NAME,
    payload: name,
});

export const setRole = (role) => ({
    type: SET_ROLE,
    payload: role,
});
