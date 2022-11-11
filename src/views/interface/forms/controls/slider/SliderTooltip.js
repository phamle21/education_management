import React from 'react';
import Slider, { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

export const SliderTooltipHorizontal = () => {
  const { Handle } = Slider;
  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <SliderTooltip prefixCls="rc-slider-tooltip" overlay={`${value} %`} visible placement="bottom" key={index}>
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  return (
    <>
      <Slider min={0} max={20} defaultValue={3} handle={handle} />
    </>
  );
};

export const SliderTooltipVertical = () => {
  const { Handle } = Slider;
  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <SliderTooltip prefixCls="rc-slider-tooltip" overlay={`${value} %`} visible placement="right" key={index}>
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  return (
    <>
      <Slider vertical min={0} max={20} defaultValue={3} handle={handle} />
    </>
  );
};
