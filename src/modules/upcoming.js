import { fetchUpcoming } from "../lib/api/request";

const GET_UPCOMING = "upcoming/GET_UPCOMING";
const GET_UPCOMING_SUCCESS = "upcoming/GET_UPCOMING_SUCCESS";
const GET_UPCOMING_FAILURE = "upcoming/GET_UPCOMING_FAILURE";

// thunk
export const getUpcoming = () => {
  return async function (dispatch) {
    dispatch({
      type: GET_UPCOMING,
    });
    try {
      const response = await fetchUpcoming();
      const data = response.data;
      dispatch({
        type: GET_UPCOMING_SUCCESS,
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: GET_UPCOMING_FAILURE,
        error: err,
      });
    }
  };
};

const initialState = {
  loading: false,
  upcoming: [],
  error: null,
};

const trending = (state = initialState, action) => {
  switch (action.type) {
    case GET_UPCOMING:
      return {
        ...state,
        loading: true,
      };
    case GET_UPCOMING_SUCCESS:
      return {
        ...state,
        loading: false,
        upcoming: action.payload,
      };
    case GET_UPCOMING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default trending;
