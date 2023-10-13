import { useState }  from "react";
import ChildV1 from "./ChildV1";
import ChildV2 from "./ChildV2";

const ParentDay = () =>{
    const[toggle,settoggle] = useState(false);
    return(
        <div>
            <button onClick={()=>settoggle((prev)=>!prev)}> Toggle Component</button>
            {toggle? <ChildV1/> : <ChildV2/>}
        </div>
    );
};
export default ParentDay;