import "./ResultsHeader.css"

export function ResultsHeader(props){
    return (
        <>
            <div className="d-flex justify-content-between mt-4">
                <span className="items-found">
                    {props.itemsFound + " Items found"}
                </span>
                <div className="d-flex views">
                    <span onClick={props.toCrammed} className="me-5"><i className="bi bi-grid-3x3-gap"></i>Crammed</span>
                    <span onClick={props.toGrid} className="me-5"><i className="bi bi-grid"></i>Grid</span>
                    <span onClick={props.tolist} className="me-3"><i className="bi bi-list-task"></i>List</span>
                </div>
            </div>
            <hr className="my-divider border-0" />
        </>
    )
}