import { useEffect, useState } from 'react';

const DEFAULT_OPTIONS = {
  config: { attributes: true, childList: false, subtree: false },
};
export const useMutationObservable = (targetEl, cb, options = DEFAULT_OPTIONS) => {
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const obs = new MutationObserver(cb);
    setObserver(obs);
  }, [cb, options, setObserver]);

  useEffect(() => {
    if (!observer) return;
    const { config } = options;
    observer.observe(targetEl, config);
    // eslint-disable-next-line consistent-return
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [observer, targetEl, options]);
};
