import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { menuChangeMenuPadding } from 'layout/nav/main-menu/menuSlice';
import { useMutationObservable } from './useMutationObservable';

const useModalPaddingFix = () => {
  const dispatch = useDispatch();

  const onListMutation = useCallback(
    (mutationList) => {
      if (Array.isArray(mutationList)) {
        // eslint-disable-next-line array-callback-return
        mutationList.map((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            dispatch(
              menuChangeMenuPadding(
                mutation.target.style.paddingRight.indexOf('px') > -1 ? parseInt(mutation.target.style.paddingRight.replace('px', ''), 10) : ''
              )
            );
          }
        });
      }
    },
    [dispatch]
  );
  useMutationObservable(document.body, onListMutation);

  return true;
};
export default useModalPaddingFix;
