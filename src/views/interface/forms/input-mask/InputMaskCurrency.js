import React from 'react';
import NumberFormat from 'react-number-format';

export const CurrencyComma = () => {
  return <NumberFormat className="form-control" thousandSeparator="," decimalSeparator="." prefix="$" />;
};

export const CurrencyDot = () => {
  return <NumberFormat className="form-control" thousandSeparator="." decimalSeparator="," prefix="¥" />;
};

export const CurrencyGrouping = () => {
  return <NumberFormat className="form-control" thousandSeparator thousandsGroupStyle="lakh" prefix="₹" />;
};
