import { fetchTrending } from "../lib/api/request";

const GET_TRENDING = "trending/GET_TOPRATED";
const GET_TRENDING_SUCCESS = "trending/GET_TRENDING_SUCCESS";
const GET_TRENDING_FAILURE = "trending/GET_TRENDING_FAILURE";

export const getTrending = () => {
  return async function (dispatch) {
    dispatch({ type: GET_TRENDING });
    try {
      const response = await fetchTrending();
      const data = response.data;
      dispatch({ type: GET_TRENDING_SUCCESS, payload: data.results });
    } catch (err) {
      dispatch({ type: GET_TRENDING_FAILURE, error: err });
    }
  };
};

const initialState = {
  loading: false,
  trending: [],
  error: null,
};

const trending = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_TRENDING_SUCCESS:
      return {
        ...state,
        trending: action.payload,
        loading: false,
      };
    case GET_TRENDING_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default trending;
