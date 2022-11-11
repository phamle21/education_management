import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ProgressBasicPrimary = () => {
  const percentage = 75;
  return <CircularProgressbar value={percentage} strokeWidth={1} text={`${percentage}%`} className="sw-12 sh-12 primary" />;
};

export const ProgressBasicSecondary = () => {
  const percentage = 75;
  return <CircularProgressbar value={percentage} strokeWidth={1} text={`${percentage}%`} className="sw-12 sh-12 secondary" />;
};

export const ProgressBasicTertiary = () => {
  const percentage = 75;
  return <CircularProgressbar value={percentage} strokeWidth={1} text={`${percentage}%`} className="sw-12 sh-12 tertiary" />;
};

export const ProgressBasicQuaternary = () => {
  const percentage = 75;
  return <CircularProgressbar value={percentage} strokeWidth={1} text={`${percentage}%`} className="sw-12 sh-12 quaternary" />;
};
