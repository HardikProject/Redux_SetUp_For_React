import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA';

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  dispatch({
    type: FETCH_DATA,
    payload: { popular: popularData },
  });
};