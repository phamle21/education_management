import React, { useState } from 'react';
import Rating from 'react-rating';

export const RatingBasicInteractive = () => {
  const [value, setValue] = useState();
  return (
    <Rating
      initialRating={value}
      onChange={setValue}
      emptySymbol={<i className="cs-star text-primary" />}
      fullSymbol={<i className="cs-star-full text-primary" />}
    />
  );
};

export const RatingBasicReadonly = () => {
  const [value, setValue] = useState();
  return (
    <Rating
      initialRating={value}
      readonly
      onChange={setValue}
      emptySymbol={<i className="cs-star text-primary" />}
      fullSymbol={<i className="cs-star-full text-primary" />}
    />
  );
};
