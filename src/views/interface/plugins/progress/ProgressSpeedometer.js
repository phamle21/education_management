import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ProgressSpeedometerPrimary = () => {
  const percentage = 50;
  return (
    <CircularProgressbar
      value={percentage}
      strokeWidth={1}
      text={`${percentage}%`}
      circleRatio={0.75}
      styles={buildStyles({
        rotation: 1 / 2 + 1 / 8,
      })}
      className="sw-12 sh-12 primary"
    />
  );
};

export const ProgressSpeedometerSecondary = () => {
  const percentage = 50;
  return (
    <CircularProgressbar
      value={percentage}
      strokeWidth={1}
      text={`${percentage}%`}
      circleRatio={0.75}
      styles={buildStyles({
        rotation: 1 / 2 + 1 / 8,
      })}
      className="sw-12 sh-12 secondary"
    />
  );
};

export const ProgressSpeedometerTertiary = () => {
  const percentage = 50;
  return (
    <CircularProgressbar
      value={percentage}
      strokeWidth={1}
      text={`${percentage}%`}
      circleRatio={0.75}
      styles={buildStyles({
        rotation: 1 / 2 + 1 / 8,
      })}
      className="sw-12 sh-12 tertiary"
    />
  );
};

export const ProgressSpeedometerQuaternary = () => {
  const percentage = 50;
  return (
    <CircularProgressbar
      value={percentage}
      strokeWidth={1}
      text={`${percentage}%`}
      circleRatio={0.75}
      styles={buildStyles({
        rotation: 1 / 2 + 1 / 8,
      })}
      className="sw-12 sh-12 quaternary"
    />
  );
};
