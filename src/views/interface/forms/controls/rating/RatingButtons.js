import React, { useState } from 'react';
import Rating from 'react-rating';

export const RatingButtonsInteractive = () => {
  const [value, setValue] = useState();
  return (
    <Rating
      initialRating={value}
      onChange={setValue}
      emptySymbol={[
        <button type="button" key="1" className="btn btn-outline-primary btn-icon btn-icon-only me-1">
          1
        </button>,
        <button type="button" key="2" className="btn btn-outline-primary btn-icon btn-icon-only me-1">
          2
        </button>,
        <button type="button" key="3" className="btn btn-outline-primary btn-icon btn-icon-only me-1">
          3
        </button>,
        <button type="button" key="4" className="btn btn-outline-primary btn-icon btn-icon-only me-1">
          4
        </button>,
        <button type="button" key="5" className="btn btn-outline-primary btn-icon btn-icon-only">
          5
        </button>,
      ]}
      fullSymbol={[
        <button type="button" key="1" className="btn btn-primary btn-icon btn-icon-only me-1">
          1
        </button>,
        <button type="button" key="2" className="btn btn-primary btn-icon btn-icon-only me-1">
          2
        </button>,
        <button type="button" key="3" className="btn btn-primary btn-icon btn-icon-only me-1">
          3
        </button>,
        <button type="button" key="4" className="btn btn-primary btn-icon btn-icon-only me-1">
          4
        </button>,
        <button type="button" key="5" className="btn btn-primary btn-icon btn-icon-only">
          5
        </button>,
      ]}
    />
  );
};

export const RatingButtonsReadonly = () => {
  const [value, setValue] = useState();
  return (
    <Rating
      initialRating={value}
      readonly
      onChange={setValue}
      emptySymbol={[
        <button type="button" key="1" className="btn btn-outline-primary hover-disabled btn-icon btn-icon-only me-1">
          1
        </button>,
        <button type="button" key="2" className="btn btn-outline-primary hover-disabled btn-icon btn-icon-only me-1">
          2
        </button>,
        <button type="button" key="3" className="btn btn-outline-primary hover-disabled btn-icon btn-icon-only me-1">
          3
        </button>,
        <button type="button" key="4" className="btn btn-outline-primary hover-disabled btn-icon btn-icon-only me-1">
          4
        </button>,
        <button type="button" key="5" className="btn btn-outline-primary hover-disabled btn-icon btn-icon-only">
          5
        </button>,
      ]}
      fullSymbol={[
        <button type="button" key="1" className="btn btn-primary hover-disabled btn-icon btn-icon-only me-1">
          1
        </button>,
        <button type="button" key="2" className="btn btn-primary hover-disabled btn-icon btn-icon-only me-1">
          2
        </button>,
        <button type="button" key="3" className="btn btn-primary hover-disabled btn-icon btn-icon-only me-1">
          3
        </button>,
        <button type="button" key="4" className="btn btn-primary hover-disabled btn-icon btn-icon-only me-1">
          4
        </button>,
        <button type="button" key="5" className="btn btn-primary hover-disabled btn-icon btn-icon-only">
          5
        </button>,
      ]}
    />
  );
};
