export function Review() {
    return (
        <div className="review-item col-sm-12 border rounded d-block pt-2 px-2">
            <div className="top">
                <div className="clientImage">
                    <img src="" alt="" />
                    <span>Raju Sheoran</span>
                </div>
                <span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                </span>
            </div>
            <article>
                <p className="review">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                    voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                    facere exercitationem!
                </p>
                <div className="text-end">
                    <p>Jan 01, 2023</p>
                </div>
            </article>
        </div>
    )
}