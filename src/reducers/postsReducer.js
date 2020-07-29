export default (state = [], action) => {
    //bad!
    //return 123; document.querySelectos('input')r
    //return axios.get('/post')

    //good
    //return state + action
    if (action.type === 'FETCH_POSTS') {
        return action.payload;
    }

    return state;

};