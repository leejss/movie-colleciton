import { fetchToprated } from "../lib/api/request";

const GET_TOPRATED = "toprated/GET_TOPRATED";
const GET_TOPRATED_SUCCESS = "toprated/GET_TOPRATED_SUCCESS";
const GET_TOPRATED_FAILURE = "toprated/GET_TOPRATED_FAILURE";

export const getToprated = () => {
  return async function (dispatch) {
    dispatch({ type: GET_TOPRATED });
    try {
      const response = await fetchToprated();
      const data = response.data;
      dispatch({ type: GET_TOPRATED_SUCCESS, payload: data.results });
    } catch (err) {
      dispatch({ type: GET_TOPRATED_FAILURE, error: err });
    }
  };
};

const initialState = {
  loading: false,
  topRated: [],
  error: null,
};

const toprated = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPRATED:
      return {
        ...state,
        loading: true,
      };
    case GET_TOPRATED_SUCCESS:
      return {
        ...state,
        topRated: action.payload,
        loading: false,
      };
    case GET_TOPRATED_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default toprated;
