import { useState } from "react";
import { Stars } from "./FiveStars/Stars";

export function FiveStars(props){
    const [stars, setStars] = useState([]);

    for(var i=0; i < 5; i++){
        if(i === 0 && stars.length > 0){
            setStars([]);
        }
        if(i < props.index){
            stars.push("fas");
        }
        else{
            stars.push("far");
        }
    }
    
    return stars.map((star, i) => <Stars key={i} rating={stars[i]} />)
}