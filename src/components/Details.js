import React, {useState} from "react";
import Comments from "./Comments";


function Details({data}){
const [upCount, setUpCount]= useState(data.upvotes);
const [downCount, setDownCount]= useState(data.downvotes);
const [comment, setComment] = useState(true)

function handleUpCountClick(){
    setUpCount(upV => upV + 1);
}

function handleDownCountClick(){
    setDownCount(downV => downV + 1);
}

function handleClickComment(){
    setComment(com => !com)
}

    return(
        <div>
        <h1>{data.title}</h1>
        <p>{data.views} Views | Uploaded {data.createdAt} </p>
        <button onClick={handleUpCountClick}>{upCount}👍</button>
        <button onClick={handleDownCountClick}>{downCount}👎</button>
               <br/>
        <button onClick={handleClickComment}>{comment ? "Hide Comments" : "Show Comments"}</button>
            <p>_________________________________________________________________________________</p>
            {comment ? <Comments comm = {data.comments} /> : null}
        </div>


    )



}


export default Details;