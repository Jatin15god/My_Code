import React from "react";
import { useState } from "react";

export const Conditional1 = ()=>
{
    return(
        <div>
            {/* {(10+2)>10?<h1 style={{background-color} : "#282c34"; {color} : "aliceblue";"}>Big</h1>:<h1>Small</h1>} */}
            {(10+2)<10?"Big":"Small"}
        </div>
    );
}

export const Conditional2 = ()=>
{
    const [showList, setShowList] = useState(true);
    let [names, setNames]= useState(["Kunal", "Vanshika", "Shalu", "Varsha"])
   
    return(
        <div>
            {showList && (
            <div>
            <ol>
                {names.map((name, index)=>(<li key={index}>{name}</li>))}
            </ol>
            </div>
            )}
        </div>
    );
}

// export default Conditional1