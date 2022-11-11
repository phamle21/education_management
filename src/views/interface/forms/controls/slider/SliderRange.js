import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const { Range } = Slider;
const SliderRange = () => {
  const [value, setValue] = useState([25, 75]);
  return (
    <>
      <Range allowCross={false} value={value} onChange={setValue} aria-valuemin={0} aria-valuemax={100} marks={{ 0: 0, 25: 25, 50: 50, 75: 75, 100: 100 }} />
    </>
  );
};

export default SliderRange;
