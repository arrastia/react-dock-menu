import { useEffect, useState } from 'react';

export const useBreakPoint = (): boolean => {
  const [isWindowSmall, setIsWindowSmall] = useState<boolean>(false);

  useEffect(() => {
    function handleWindowResizeListener() {
      setIsWindowSmall(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleWindowResizeListener);

    return () => {
      window.removeEventListener('resize', handleWindowResizeListener);
    };
  }, []);

  return isWindowSmall;
};
