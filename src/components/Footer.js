import "./Footer.css";

export function Footer(){
    return (
        <>
            <div className="py-4 text-light custom-bg footer">
                <div className="container footer-container d-flex">
                    <div className="col-sm-6 p-3">
                        <h3 className="font-weight-bold title pb-3 mb-3">Who are we ?</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            . It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="col-sm-6 py-3 social-section">
                        <h3 className="font-weight-bold title pb-3 mb-3">Contact us</h3>
                        <div className="d-flex flex-wrap p-3 justify-content-center social">
                            <i className="fa-brands fa-square-facebook"></i>
                            <i className="fa-brands fa-square-x-twitter"></i>
                            <i className="fa-brands fa-square-google-plus"></i>
                            <i className="fa-brands fa-square-youtube"></i>
                            <i className="fa-brands fa-square-instagram"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}