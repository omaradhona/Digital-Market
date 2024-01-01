import './Accordion.css'

export function Accordion(props){
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={props.id}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#"+props.target} aria-expanded="true" aria-controls={props.target}>
                    {props.title}
                </button>
            </h2>
            <div id={props.target} className="accordion-collapse collapse show" aria-labelledby={props.id} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {props.content}
                </div>
            </div>
        </div>     
    )
}