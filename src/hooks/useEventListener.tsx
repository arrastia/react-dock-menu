import { useEffect } from 'react';

interface Props {
  appendTo?: Window | Element;
  event: keyof WindowEventMap;
  handler: <T extends Event>(event: T) => void;
  options?: AddEventListenerOptions;
}

export function useEventListener({ appendTo, event, handler, options }: Props) {
  useEffect(() => {
    const node = appendTo || document;

    if (!handler || !node || typeof window === 'undefined') return;

    node.addEventListener(event, handler, options);

    return () => {
      node.removeEventListener(event, handler, options);
    };
  }, [appendTo, event, handler, options]);

  return () => {
    const node = document;
    node?.removeEventListener(event, handler, options);
  };
}
