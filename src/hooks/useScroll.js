import { useState, useEffect } from 'react';

const useScroll = (openSidebar, isUnset) => {
  const [isScroll, setScroll] = useState('unset');

  useEffect(() => {
    if (openSidebar || isUnset) {
      document.body.style.position = 'unset';
    } else {
      document.body.style.position = isScroll;
      document.body.style.width = '100%';
    }
    document.body.id = 'start_page';
  }, [isScroll, openSidebar, isUnset]);

  return { isScroll, setScroll };
};

export default useScroll;
