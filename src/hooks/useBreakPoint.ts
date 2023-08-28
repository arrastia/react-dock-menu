import { useCallback, useEffect, useState } from 'react';

import { useEventListener } from './useEventListener';

export const useBreakPoint = (): boolean => {
  const [isWindowSmall, setIsWindowSmall] = useState<boolean>(false);

  const handleWindowResizeListener = useCallback(() => {
    if (typeof window !== 'undefined') setIsWindowSmall(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    handleWindowResizeListener();
  }, [handleWindowResizeListener]);

  useEventListener({
    appendTo: typeof window !== 'undefined' ? window : undefined,
    event: 'resize',
    handler: handleWindowResizeListener
  });

  return isWindowSmall;
};
