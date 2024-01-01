import './SearchSection.css'

export function SearchSection(props){
    return (
        <div className="d-flex justify-content-center align-items-center pt-1 pb-1">
            <div className="d-flex views">
                <span onClick={props.toAscending} className="ms-5"><i className="bi bi-arrow-90deg-up"></i>Ascending</span>
                <span onClick={props.toDescending} className="ms-5"><i className="bi bi-arrow-90deg-down"></i>Descending</span>
            </div>
            <div className="d-flex align-items-center searchbar rounded mx-5 p-2">
                <input className="search_input border-0 text-light bg-transparent" type="text" name="" placeholder="Search..." />
                <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
            </div>
            <div className="d-flex views">
                <span onClick={props.toCrammed} className="me-5"><i className="bi bi-grid-3x3-gap"></i>Crammed</span>
                <span onClick={props.toGrid} className="me-5"><i className="bi bi-grid"></i>Grid</span>
                <span onClick={props.tolist} className="me-5"><i className="bi bi-list-task"></i>List</span>
            </div>
        </div>
    )
}