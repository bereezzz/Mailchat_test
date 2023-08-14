import React, { FC, useState, useEffect } from "react";

import "./time.css";
interface Time {
  value: number;
}

export const Time: FC<Time> = ({ value }) => {
  const [time, setTime] = useState("")
  useEffect(() => {
    const timestamp = value;  
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      setTime(formattedDateTime)

  }, []);
  return <div className="timeBlock">
    <div className="timeInChat">{time}</div>
    </div>
};
