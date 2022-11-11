import React from 'react';
import useMousetrap from 'react-hook-mousetrap';
import { useDispatch, useSelector } from 'react-redux';
import { settingsChangeColor } from 'settings/settingsSlice';

const ShortcutSingleKey = () => {
  const dispatch = useDispatch();
  const { color } = useSelector((state) => state.settings);

  useMousetrap(['l'], () => {
    dispatch(settingsChangeColor(color.includes('light') ? color : color.replace('dark', 'light')));
  });

  useMousetrap(['d'], () => {
    dispatch(settingsChangeColor(color.includes('light') ? color.replace('light', 'dark') : color));
  });

  return (
    <>
      <p>It's possible to bind single keys to a task.</p>
      <p className="mb-0">
        <kbd>d</kbd> and <kbd>l</kbd> keys toggle dark/light mode.
      </p>
    </>
  );
};

export default ShortcutSingleKey;
