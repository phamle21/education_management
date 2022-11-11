import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ProgressMultiplePrimary = () => {
  const percentageFirst = 60;
  const percentageSecond = 15;
  return (
    <div className="sw-12 sh-12">
      <CircularProgressbarWithChildren
        value={percentageSecond}
        strokeWidth={1}
        className="danger"
        styles={buildStyles({
          rotation: percentageFirst / 100,
          strokeLinecap: 'butt',
        })}
      >
        {/* Foreground path */}
        <CircularProgressbarWithChildren
          value={percentageFirst}
          strokeWidth={1}
          className="primary transparent-trailer"
          styles={buildStyles({
            trailColor: 'transparent',
            strokeLinecap: 'butt',
          })}
        >
          <div className="text-primary">
            {percentageSecond}/{percentageFirst}
          </div>
        </CircularProgressbarWithChildren>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export const ProgressMultipleSecondary = () => {
  const percentageFirst = 60;
  const percentageSecond = 15;
  return (
    <div className="sw-12 sh-12">
      <CircularProgressbarWithChildren
        value={percentageSecond}
        strokeWidth={1}
        className="danger"
        styles={buildStyles({
          rotation: percentageFirst / 100,
          strokeLinecap: 'butt',
        })}
      >
        {/* Foreground path */}
        <CircularProgressbarWithChildren
          value={percentageFirst}
          strokeWidth={1}
          className="secondary transparent-trailer"
          styles={buildStyles({
            trailColor: 'transparent',
            strokeLinecap: 'butt',
          })}
        >
          <div className="text-secondary">
            {percentageSecond}/{percentageFirst}
          </div>
        </CircularProgressbarWithChildren>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export const ProgressMultipleTertiary = () => {
  const percentageFirst = 60;
  const percentageSecond = 15;
  return (
    <div className="sw-12 sh-12">
      <CircularProgressbarWithChildren
        value={percentageSecond}
        strokeWidth={1}
        className="danger"
        styles={buildStyles({
          rotation: percentageFirst / 100,
          strokeLinecap: 'butt',
        })}
      >
        {/* Foreground path */}
        <CircularProgressbarWithChildren
          value={percentageFirst}
          strokeWidth={1}
          className="tertiary transparent-trailer"
          styles={buildStyles({
            trailColor: 'transparent',
            strokeLinecap: 'butt',
          })}
        >
          <div className="text-tertiary">
            {percentageSecond}/{percentageFirst}
          </div>
        </CircularProgressbarWithChildren>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export const ProgressMultipleQuaternary = () => {
  const percentageFirst = 60;
  const percentageSecond = 15;
  return (
    <div className="sw-12 sh-12">
      <CircularProgressbarWithChildren
        value={percentageSecond}
        strokeWidth={1}
        className="danger"
        styles={buildStyles({
          rotation: percentageFirst / 100,
          strokeLinecap: 'butt',
        })}
      >
        {/* Foreground path */}
        <CircularProgressbarWithChildren
          value={percentageFirst}
          strokeWidth={1}
          className="quaternary transparent-trailer"
          styles={buildStyles({
            trailColor: 'transparent',
            strokeLinecap: 'butt',
          })}
        >
          <div className="text-quaternary">
            {percentageSecond}/{percentageFirst}
          </div>
        </CircularProgressbarWithChildren>
      </CircularProgressbarWithChildren>
    </div>
  );
};
