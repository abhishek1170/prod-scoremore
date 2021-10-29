import { useEffect } from "react";
import "./slider.scss";

const Slider = ({ value, min, max, field, onChange }) => {
  useEffect(() => {
    setToolTip();
  }, []);
  useEffect(() => {
    setToolTip();
  });
  const setToolTip = () => {
    let rangeSlider = document.getElementById("rs-range-line");
    let rangeBullet = document.getElementById("rs-bullet");
    let bulletPosition = rangeSlider.value / rangeSlider.max;
    let input = document.getElementById("slider-container");
    let inputWidth = input.offsetWidth;
    rangeBullet.style.left = bulletPosition * (inputWidth - 22) + "px";
  };
  return (
    <div className='slider'>
      <div id='slider-container' className='input-container'>
        <div id='rs-bullet' className='rs-label-container'>
          <span className='rs-label'>
            <span>{value}</span>
          </span>
        </div>
        <input
          id='rs-range-line'
          className='rs-range'
          type='range'
          value={value}
          min={min}
          max={max}
          onChange={e => {
            onChange(field, e.target.value);
            setToolTip();
          }}
        />
      </div>
      <div className='minmax'>
        <span>Not Specific</span>
        <span>{`>${max}`}</span>
      </div>
    </div>
  );
};

Slider.defaultProps = {
  initialValue: 0,
  min: 0,
  max: 5000
};
export default Slider;
