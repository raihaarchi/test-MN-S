import { useSelector } from 'react-redux';

export const useLoadingSelector = () => useSelector(({ competencies }) => competencies.isLoading);
export const useCompetenciesSelector = () => useSelector(({ competencies }) => competencies.data);
