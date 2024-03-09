import { Link } from "react-router-dom";

export function CategoryDiv(props){
    return (
        <Link className={"px-5 py-2 text-white d-flex align-items-center gap-3 rounded " + (props.isActive ? "is-active" : "inactive")}
            onClick={props.toggle}>
                <span>{props.category}</span>
                <span className={"stock px-1 " + (props.isActive ? "is-active" : "inactive")}>
                    {props.stock}
                </span>
        </Link>
    )
}