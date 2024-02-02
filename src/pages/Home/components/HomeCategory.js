import { useState } from "react";
import { Link } from "react-router-dom";


export function HomeCategory(props){
    const [isHidden, setIsHidden] = useState(true);

    return (
        <>
        <div className="col-md-4 position-relative"
            onMouseOver={() => setIsHidden(false)}
            onMouseLeave={() => setIsHidden(true)}>
            <div>
                <img src={props.bgImage} width="100%" height="100%" 
                    style={{
                        filter: isHidden ? "" : "brightness(50%)",
                        transform: isHidden ? "" : "scale(1.02, 1.01)",
                        transition: "0.3s",
                    }}/>
                
            </div>
            <div className="position-absolute top-0 border w-100 h-100 d-flex justify-content-center align-items-center">
                <div className="text-center overflow-hidden border"
                    style={{
                        height: isHidden ? "0px" : "100px",
                    }}>
                    <h3 className="pb-3">{props.category}</h3>
                    <Link>Browse</Link>
                </div>
            </div>
            
        </div>
        </>
    )
}