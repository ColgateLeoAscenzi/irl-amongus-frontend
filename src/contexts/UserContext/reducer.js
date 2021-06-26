import { SET_NAME } from './actions';

export const userInitialState = {
    name: '',
};

export const InitUserReducer = () => userInitialState;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload,
            };
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
};

export default reducer;
