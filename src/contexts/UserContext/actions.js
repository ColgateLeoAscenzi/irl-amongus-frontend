export const PREFIX = 'user/';
export const SET_NAME = `${PREFIX}SET_NAME`;

export const setName = (name) => ({
    type: SET_NAME,
    payload: name,
});
