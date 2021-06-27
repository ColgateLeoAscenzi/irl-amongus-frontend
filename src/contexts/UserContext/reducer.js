import { SET_NAME, SET_ROLE } from './actions';

export const userInitialState = {
    name: '',
    isDead: false,
    role: '',
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
        case SET_ROLE: {
            return {
                ...state,
                role: action.payload,
            };
        }
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
};

export default reducer;
