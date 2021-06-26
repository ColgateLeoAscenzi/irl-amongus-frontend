/**
 * Take a dispatch function from useReducer, and dispatch a custom action
 * @param {function} dispatcher
 * @param {Object} action
 */
export const dispatch = (dispatcher, action) => {
    dispatcher(action);
};
