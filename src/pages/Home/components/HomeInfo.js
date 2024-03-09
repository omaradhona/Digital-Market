export function HomeInfo(props){
    return (
        <>
            <div className="col-md-2 d-flex justify-content-center align-items-center flex-column">
                <i className={props.infoIcon + " fs-2 text-white"}></i><br />
                <p className="lh-sm text-white text-center">
                    <span className="fw-bold">{props.infoTitle}</span><br />
                    {props.info}
                </p>
            </div>
        </>
    )
}