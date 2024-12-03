import React from "react";
import Marks from "./Marks";

const DisplayMarks = () => {
  const student = [
    { m1: 87, m2: 54, m3: 78 },
    { m1: 78, m2: 89, m3: 90 },
    { m1: 67, m2: 78, m3: 98 },
    { m1: 90, m2: 74, m3: 83 },
    { m1: 73, m2: 78, m3: 98 },
  ];
  return (
    <div>
        {student.map((student,i)=>(
            <Marks key={i} m1={student.m1} m2={student.m2} m3={student.m3} />
        ))}
      
    </div>
  );
};

export default DisplayMarks;