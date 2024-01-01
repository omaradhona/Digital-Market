export function CategoryDiv(props){
    return (
        <div className="ms-1 px-5 py-2 text-white rounded"
            style={{
                backgroundColor: props.isActive ? "red" : "",
            }}
            onClick={props.toggle}
        >
            {props.category}
            <span className="stock px-1" 
                style={{
                    color: props.isActive ? "white" : "",
                    borderColor: props.isActive ? "white" : "",
                }}>
                {props.stock}
            </span>
        </div>
    )
}