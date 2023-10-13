import { memo } from "react";

const ChildDay = () => {
  console.log("Re-Render ChildDay15B");

  return (
    <div>
      <p>I am a child component</p>
    </div>
  );
};

// const ChildComp = memo(ChildDay);
export default  memo(ChildDay);
