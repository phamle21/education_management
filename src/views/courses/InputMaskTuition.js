import React from 'react';
import NumberFormat from 'react-number-format';

export const InputMaskTuition = ({ handleChange, maxTuition, formData }) => {
  const MIN_VAL = 0;
  const withValueCap = (inputObj) => {
    const { value } = inputObj;
    if (value >= MIN_VAL && value <= maxTuition) {
      const objtemp = {
        target: {
          name: 'tuitionPaid',
          value
        }
      }
      handleChange(objtemp)
      return true
    };
    return false;
  };
  return <NumberFormat className="form-control" value={formData.tuitionPaid} name="tuitionPaid" thousandSeparator="," decimalSeparator="." suffix=" VNĐ" isAllowed={withValueCap} />;
};
