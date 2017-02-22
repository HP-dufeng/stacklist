export default (state = null, action) => {
    if (action.type === 'select_item') {
        return action.payload;
    }

    return state;
};
