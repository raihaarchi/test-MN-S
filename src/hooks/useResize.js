import { useWindowSize } from 'react-use';

const useResize = () => {
  const { width: widthWindow, height: heightWindow } = useWindowSize();

  return { widthWindow, heightWindow };
};

export default useResize;
