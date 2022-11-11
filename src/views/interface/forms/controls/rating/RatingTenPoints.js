import React, { useState } from 'react';
import Rating from 'react-rating';

export const RatingTenPointsInteractive = () => {
  const [value, setValue] = useState(null);
  return (
    <Rating
      initialRating={value}
      onChange={setValue}
      start={1}
      stop={10}
      emptySymbol={<i className="cs-star text-primary" />}
      fullSymbol={<i className="cs-star-full text-primary" />}
    />
  );
};

export const RatingTenPointsReadonly = () => {
  const [value, setValue] = useState(null);
  return (
    <Rating
      initialRating={value}
      readonly
      start={1}
      stop={10}
      onChange={setValue}
      emptySymbol={<i className="cs-star text-primary" />}
      fullSymbol={<i className="cs-star-full text-primary" />}
    />
  );
};
