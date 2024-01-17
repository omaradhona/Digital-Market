import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiveStars } from "../components/FiltersSection/FilterRatings/FiveStars";
import "./SingleProduct.css"

export function SingleProduct(){
    const {id} = useParams();  

    const [singleProduct, setSingleProduct] = useState(null);

    useEffect(() => {
        function fetchSingleProduct(){
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(product => setSingleProduct(product))
        }

        fetchSingleProduct();
    }, [])

    if(singleProduct){
        return (
        
        <>
            
            <section className="py-5 single-product">
                <div className="container border">
                    <div className="d-flex align-items-start row">
                        <div className="col-md-6 border d-flex">
                            <div className="border col-9 offset-3">
                                <img className="card-img-top mb-5 mb-md-0" src={singleProduct.image} />
                            </div>
                            
                        </div>
                        <div className="col-6 py-3 d-flex flex-column align-self-stretch border">
                            <div className="mb-auto">
                                <h3 className="fw-bolder">{singleProduct.title}</h3>
                                <div className="fs-5 mb-3">
                                    <span>${singleProduct.price}</span><br />
                                    <FiveStars index={singleProduct.rating.rate} />
                                    
                                </div>
                                <p>{singleProduct.description}</p>
                            </div>
                            
                            <div className="d-flex border">

                                <input className="form-control me-1" id="inputQuantity" type="number" defaultValue="1" min="1" style={{width: "60px"}} />
                                <button className="border rounded me-1"><i className="fa-solid fa-minus"></i></button>
                                <button className="border rounded me-auto"><i className="fa-solid fa-plus"></i></button>
                                <button className="btn text-white bg-danger">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )}
}