import { HYDRATE } from 'next-redux-wrapper';
import types from './types';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export default function competencies(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      const nextState = {
        ...state,
        ...action.payload.competencies,
      };
      if (state.data.length !== 0) nextState.data = state.data;
      return nextState;
    }
    case types.LOADING_COMPETENCIES_START:
      return { ...state, isLoading: true };
    case types.LOADING_COMPETENCIES_FINISH:
      return { ...state, data: [...action.competencies], isLoading: false };
    case types.LOADING_COMPETENCIES_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
