import { useMedia } from 'react-use';

const useScreen = () => {
  const tablet = '540px';
  const middleDesctop = '768px';
  const desctop = '1024px';

  const isMobile = useMedia(`(max-width: ${tablet})`);
  const isTablet = useMedia(`(max-width: ${desctop})`);
  const isMiddleTablet = useMedia(`(max-width: ${middleDesctop})`);

  return { isMobile, isTablet, isMiddleTablet };
};

export default useScreen;
