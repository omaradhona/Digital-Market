import { useState } from "react";
import { Link } from "react-router-dom";

export function HomeCategory(props){
    const [isHidden, setIsHidden] = useState(true);

    return (
        <>
        <div className="col-sm-10 col-md-5 position-relative rounded"
            onMouseOver={() => setIsHidden(false)}
            onMouseLeave={() => setIsHidden(true)}>
            <div>
                <img src={props.bgImage} width="100%" height="100%" 
                    style={{
                        filter: isHidden ? "" : "brightness(50%)",
                        borderRadius: "8px",
                        transition: "0.3s",
                    }}/>
                
            </div>
            <div className="position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center rounded">
                <div className="text-center overflow-hidden"
                    style={{
                        height: isHidden ? "0px" : "100px",
                    }}>
                    <h3 className="pb-3">{props.category}</h3>
                    <Link to="/pages/Shop" onClick={() => props.setIndex(props.index)}>Browse</Link>
                </div>
            </div>
        </div>
        </>
    )
}