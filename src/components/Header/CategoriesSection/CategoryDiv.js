import { Link } from "react-router-dom"

export function CategoryDiv(props){
    return (
        <Link className={"ms-1 px-5 py-2 text-white rounded " + (props.isActive ? "is-active" : "inactive")}
            style={{
                
            }}
            onClick={props.toggle}
        >
            {props.category}
            <span className={"stock px-1 " + (props.isActive ? "is-active" : "inactive")} 
                style={{
                    
                }}>
                {props.stock}
            </span>
        </Link>
    )
}