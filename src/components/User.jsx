import { useState } from "react";
const User = ({name})=>{
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div  className="p-10 border-2 border-zinc-500 my-3">
        
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h1>{name}</h1>
            <p>bdsm</p>
        </div>
    )
}

export default User;