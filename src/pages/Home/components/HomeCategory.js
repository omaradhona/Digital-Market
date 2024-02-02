import { useState } from "react";
import { Link } from "react-router-dom";


export function HomeCategory(props){
    const [isHidden, setIsHidden] = useState(true);

    return (
        <>
            <div onMouseOver={() => setIsHidden(false)}
                onMouseLeave={() => setIsHidden(true)}
                className="col-md-4 d-flex justify-content-center align-items-center"
                style={{
                    backgroundImage: "url('" + props.bgImage + "')",
                    backgroundSize: "100% 100%",
                    
                }}>
                <div className="text-center overflow-hidden"
                    style={{
                        height: isHidden ? "0px" : "100px",
                        
                    }}>
                    <h3 className="pb-3">{props.category}</h3>
                    <Link>Browse</Link>
                </div>
            </div>
        </>
    )
}