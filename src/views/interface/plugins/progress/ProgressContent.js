import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const ProgressContentPrimary = () => {
  const percentage = 75;
  return (
    <div className="sw-12 sh-12">
      <CircularProgressbarWithChildren value={75} className="primary" strokeWidth={1}>
        <CsLineIcons icon="badge" width="20" height="20" className="cs-icon icon text-primary mb-2" />
        <div className="text-primary">{percentage}%</div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export const ProgressContentSecondary = () => {
  const percentage = 75;
  return (
    <div className="sw-12 sh-12">
      <CircularProgressbarWithChildren value={75} className="secondary" strokeWidth={1}>
        <CsLineIcons icon="badge" width="20" height="20" className="cs-icon icon text-secondary mb-2" />
        <div className="text-secondary">{percentage}%</div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export const ProgressContentTertiary = () => {
  const percentage = 75;
  return (
    <div className="sw-12 sh-12">
      <CircularProgressbarWithChildren value={75} className="tertiary" strokeWidth={1}>
        <CsLineIcons icon="badge" width="20" height="20" className="cs-icon icon text-tertiary mb-2" />
        <div className="text-tertiary">{percentage}%</div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export const ProgressContentQuaternary = () => {
  const percentage = 75;
  return (
    <div className="sw-12 sh-12">
      <CircularProgressbarWithChildren value={75} className="quaternary" strokeWidth={1}>
        <CsLineIcons icon="badge" width="20" height="20" className="cs-icon icon text-quaternary mb-2" />
        <div className="text-quaternary">{percentage}%</div>
      </CircularProgressbarWithChildren>
    </div>
  );
};
