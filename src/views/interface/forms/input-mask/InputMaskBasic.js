import React from 'react';
import NumberFormat from 'react-number-format';

export const InputMaskBasicDigits = () => {
  return <NumberFormat className="form-control" mask="-" format="###" allowEmptyFormatting />;
};

export const InputMaskBasicValue = () => {
  const MAX_VAL = 150;
  const withValueCap = (inputObj) => {
    const { value } = inputObj;
    if (value <= MAX_VAL) return true;
    return false;
  };
  return <NumberFormat className="form-control" allowEmptyFormatting isAllowed={withValueCap} />;
};
