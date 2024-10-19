import { useState } from "react";
import { Stars } from "../../FiltersSection/FilterRatings/FiveStars/Stars";
import { FiveStars } from "../../FiltersSection/FilterRatings/FiveStars";
import { Link } from "react-router-dom";
import "./Product.css";

export function Product(props){
    const [stars, setStars] = useState([]);

    for(var i = 0.49; i < 5; i++){
        if(i === 0.49 && stars.length > 0){
            setStars([]);
        }
        if(i < props.rating){
            stars.push("fas");
        }
        else{
            stars.push("far");
        }
    }

    if(props.view === "grid"){
        return (
            <div className="grid col-lg-4 col-sm-6 pb-2">
                <div className="card">
                    <div className="card-body">
                        <div className="text-center">
                            <Link to={"/pages/Shop/" + props.id}>
                                <img className="img-top" src={props.image} alt="" />
                            </Link> 
                        </div>
                        <div className="pt-3">
                            <Link to={"/pages/Shop/" + props.id} className="product-link">
                                <h6 className="font-weight-bold product-title">{props.title}</h6>
                            </Link>
                            <div className="text-muted product-description">{props.description}</div>
                        </div>
                        <div className="d-flex align-items-center pt-3">
                            {/*stars.map((star, i) => <Stars rating={star} key={i} />)*/}
                            <FiveStars key={i} colorfulStars={props.rating} firstIteration="0.49" />
                            <span className="ms-2">
                                {props.rating}{" "}{"(" + props.count + ")"}
                            </span>
                            
                            
                            {/*<span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="far fa-star"></span>*/}

                        </div>
                        <div className="d-flex align-items-center justify-content-between pt-3">
                            <div className="h6 font-weight-bold">{props.price} USD</div>
                            <div className="btn text-white">Buy now</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else if(props.view === "crammed"){
        return (
            <div className="crammed col-lg-3 col-md-6 col-sm-10 pb-2">
                <div className="card">
                    <div className="card-body">
                        <div className="text-center">
                            <Link to={"/pages/Shop/" + props.id} className="product-link">
                                <h6 className="font-weight-bold product-title">{props.title}</h6>
                            </Link>
                            <Link to={"/pages/Shop/" + props.id}>
                                <img className="img-top" src={props.image} alt="" />
                            </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-between pt-3">
                            <div className="h4 font-weight-bold">${props.price}</div>
                            <div className="btn text-white col-6">BUY</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else if(props.view === "list"){
        return (
            <div className="list col-lg-12 col-md-6 col-sm-10 pb-2">
                <div className="card">
                    <div className="card-body d-flex">
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <Link to={"/pages/Shop/" + props.id}>
                                <img className="img-top" src={props.image} alt="" />
                            </Link> 
                        </div>
                        <div className="d-flex flex-column col-lg-9">
                            <div className="mb-auto">
                                <Link to={"/pages/Shop/" + props.id} className="product-link">
                                    <h6 className="font-weight-bold product-title">{props.title}</h6>
                                </Link>
                                <div className="text-muted">{props.description}</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div className="h4 font-weight-bold">{props.price} USD</div>
                                <div>
                                    {/*stars.map((star, i) => <Stars rating={star} key={i} />)*/}
                                    <FiveStars key={i} colorfulStars={props.rating} firstIteration="0.49" />
                                    <span className="ms-2">{props.rating}{" "}{"(" + props.count + ")"}</span>
                                </div>
                                <div className="btn text-white col-3">BUY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}