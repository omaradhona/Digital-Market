import { useState } from "react";

export function FiveStars(props){
    const [stars, setStars] = useState([]);

    for(var i = props.firstIteration; i < 5; i++){
        if(i === props.firstIteration && stars.length > 0){
            setStars([]);
        }
        if(i < props.colorfulStars){
            stars.push("fas");
        }
        else{
            stars.push("far");
        }
    }
    
    return stars.map((star, i) => <span key={i} className={stars[i] + " fa-star"}></span>)
}