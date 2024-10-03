import React, {useState} from "react";


function Comments({ comm }) {
    const[upCount, setUpCount]= useState(10);
    const [downCount, setDownCount]= useState(2);
    const[up2Count, setUp2Count]= useState(14);
    const [down2Count, setDown2Count]= useState(5);
    function handleUpCountClick(){
        setUpCount(upV => upV + 1);
    }
    
    function handleDownCountClick(){
        setDownCount(downV => downV + 1);
    }
    function handleUp2CountClick(){
        setUp2Count(upV => upV + 1);
    }
    
    function handleDown2CountClick(){
        setDown2Count(downV => downV + 1);
    }


    return (
        <div>
            <button className="LeftUpButton" onClick={handleUpCountClick}>{upCount}👍</button>
            <button onClick={handleDownCountClick}>{downCount}👎</button>
            {comm.map(com =>
                <div>
                    <h3>{com.user}</h3>                 
                    <p>{com.comment}</p>
                    
                </div>
            )}
                      <button className="LeftUpButton"onClick={handleUp2CountClick}>{up2Count}👍</button>
                    <button onClick={handleDown2CountClick}>{down2Count}👎</button>
            </div>
    )

}



export default Comments