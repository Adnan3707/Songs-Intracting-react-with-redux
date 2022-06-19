import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";


// export const fetchPosts =  () => {
//     const response = jsonPlaceholder('/post')
//     return {
//         type:'FETCH_POST',
//         payload : response
//     };
// };


      // Applying Thunk Middleware to actions
export const fetchPosts =  () => {
    return async function(dispatch,getState){
    const response = await jsonPlaceholder('/posts');
    dispatch({type:'FETCH_POSTS',payload:response})
  }
}
export const fetchUser =  (id) => {
  return async function(dispatch,getState){
  const response = await jsonPlaceholder(`/users/${id}`);
  dispatch({type:'FETCH_USER',payload:response.data})
}
}