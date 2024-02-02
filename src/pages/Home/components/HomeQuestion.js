import { useState } from "react";

export function HomeQuestion(props){
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="mx-auto px-5 w-75">
                <span className="d-flex align-items-center faq-element mb-3"
                    onClick={() => setIsActive(!isActive)}>
                    <h1 className="me-auto">
                        {props.question}
                    </h1>
                    <i className={isActive ? "fa-solid fa-angle-up h1" : "fa-solid fa-angle-down h1"}>
                    </i>
                </span>
                <p style={{
                    fontSize: isActive ? "16px" : "0px",
                    transition: "0.2s",
                }}>
                    {props.answer}
                </p>
            </div>
        </>
    )
}