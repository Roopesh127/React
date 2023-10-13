import { useState } from "react";

const ArrayMap = () => {
  const [names, setNames] = useState([
    "Rahul",
    "Mahesh",
    "Mukesh",
    "Pankaj",
    "Roopesh",
    "Vansh",
  ]);

  return (
    <div>
      <table>
        {names.map((currentName, index) => {
          return <li key={index}>{currentName}</li>;
        })}
      </table>
    </div>
  );
};

export default ArrayMap;
