import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datetime.scss";

import { Clock } from "../../images";

const DateTime = ({ startDate, field, onChange }) => {
  return (
    <div className='datetime'>
      <DatePicker
        selected={startDate}
        onChange={date => onChange(field, date)}
        showTimeSelect
        minDate={new Date()}
        //   excludeTimes={[
        //     setHours(setMinutes(new Date(), 0), 17),
        //     setHours(setMinutes(new Date(), 30), 18),
        //     setHours(setMinutes(new Date(), 30), 19),
        //     setHours(setMinutes(new Date(), 30), 17)
        //   ]}
        dateFormat='MMMM d, yyyy h:mm aa'
      />
      <img src={Clock} alt='clock' />
    </div>
  );
};

export default DateTime;
