import { useState } from "react";

export function HomeQuestion(props){
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="mx-auto px-5 w-75">
                <span className="d-flex align-items-center faq-element mb-3"
                    onClick={() => setIsActive(!isActive)}
                    style={{
                        color: isActive ? "#377cf2" : "",
                        borderBottom: isActive ? "3px solid #377cf2" : "3px solid",
                    }}>
                    <h1 className="me-auto">
                        {props.question}
                    </h1>
                    <i className={isActive ? "fa-solid fa-angle-up h1" : "fa-solid fa-angle-down h1"}>
                    </i>
                </span>
                <div style={{
                    maxHeight: isActive ? "300px" : "0px",
                    transition: "0.3s",
                    overflow: "hidden",
                }}>
                    <p>
                        {props.answer}
                    </p>
                </div>
            </div>
        </>
    )
}