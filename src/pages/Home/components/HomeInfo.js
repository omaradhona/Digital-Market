export function HomeInfo(props){
    return (
        <>
            <div className="col-md-2 d-flex justify-content-center align-items-center flex-column bg-white">
                <i className={props.infoIcon + " fs-2 bg-danger"}></i><br />
                <p className="lh-sm text-center">
                    <span className="fw-bold text-danger">{props.infoTitle}</span><br />
                    {props.info}
                </p>
            </div>
        </>
    )
}