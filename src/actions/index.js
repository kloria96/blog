import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return async (dispatch) => {
        //bad aproach!!
        //const response = await jsonPlaceholder.get('/posts')

        //Correct aproach!
        const response = await jsonPlaceholder.get('/posts')
        dispatch({ type: 'FETCH_POST', payload: response })
    }
};
