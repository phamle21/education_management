import React from 'react';
import NumberFormat from 'react-number-format';

export const InputMaskPhoneInternational = () => {
  return <NumberFormat format="+49 (###) ###-####" mask="_" className="form-control" allowEmptyFormatting />;
};

export const InputMaskPhoneDomestic = () => {
  return <NumberFormat format="(###) ###-####" mask="_" className="form-control" allowEmptyFormatting />;
};
