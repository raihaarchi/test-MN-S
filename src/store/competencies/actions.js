import types from './types';
import request from '../../utils/api';

const loadCompetenciesStart = () => ({
  type: types.LOADING_COMPETENCIES_START,
  isLoading: true,
});

export const loadCompetenciesSuccess = (competencies) => ({
  type: types.LOADING_COMPETENCIES_FINISH,
  competencies,
});

export const loadCompetenciesFailure = (error) => ({
  type: types.LOADING_COMPETENCIES_FAILURE,
  error,
});

export const loadCompetencies = () => (dispatch) => {
  dispatch(loadCompetenciesStart());

  return request
    .get('categories')
    .then(({ data }) => {
      dispatch(loadCompetenciesSuccess(data.data));
    })
    .catch((err) => console.log(err));
};
