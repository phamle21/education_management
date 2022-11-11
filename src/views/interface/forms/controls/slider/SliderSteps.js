import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderSteps = () => {
  const [value, setValue] = useState(25);
  return (
    <>
      <Slider
        allowCross={false}
        value={value}
        onChange={setValue}
        aria-valuemin={0}
        aria-valuemax={100}
        marks={{ 0: 0, 25: 25, 50: 50, 75: 75, 100: 100 }}
        step={null}
      />
    </>
  );
};

export default SliderSteps;
