import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { FiveStars } from "../components/FiltersSection/FilterRatings/FiveStars";
import "./SingleProduct.css"

export function SingleProduct(props){
    const {id} = useParams();  

    const [singleProduct, setSingleProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const btnRef = useRef();

    useEffect(() => {
        function fetchSingleProduct(){
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(product => setSingleProduct(product))
        }

        fetchSingleProduct();
        
    }, [])

    function minusQty(){
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
        if(quantity === 2){
            setQuantity(quantity - 1);
            btnRef.current.disabled = true;
        }
    }

    function plusQty(){
        setQuantity(quantity + 1);
        if(quantity === 1){
            btnRef.current.disabled = false;
        }
        
    }
    
    if(singleProduct){
        return (
        
        <>
            
            <section className="py-5 single-product">
                <div className="container border">
                    <div className="d-flex align-items-center row border">
                        {/*<div className="product-images d-flex flex-column col-md-1 border align-self-stretch
                        align-items-center justify-content-center">
                            <img src={singleProduct.image} />
                            <img src={singleProduct.image} />
                            <img src={singleProduct.image} />
                            <img src={singleProduct.image} />
                        </div>*/}
                        <div className="col-md-6 d-flex justify-content-center p-3 border">
                            <img className="card-img-top mb-5 mb-md-0" src={singleProduct.image} />
                            
                        </div>
                        <div className="col-md-6 py-3 d-flex flex-column align-self-stretch border">
                            <div className="mb-auto">
                                <h3 className="fw-bolder">{singleProduct.title}</h3>
                                <div className="fs-5 mb-3">
                                    <span>${singleProduct.price}</span><br />
                                    <FiveStars index={singleProduct.rating.rate} />
                                    
                                </div>
                                <p>{singleProduct.description}</p>
                            </div>
                            
                            <div className="d-flex">

                                <input className="form-control me-1" id="inputQuantity" type="number" min="1" value={quantity} readOnly style={{width: "60px"}} />
                                <button onClick={minusQty} className="border rounded me-1" ref={btnRef}><i className="fa-solid fa-minus"></i></button>
                                <button onClick={plusQty} className="border rounded me-auto"><i className="fa-solid fa-plus"></i></button>
                                <button onClick={() => props.addItem(singleProduct, quantity)} className="btn text-white bg-danger">
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