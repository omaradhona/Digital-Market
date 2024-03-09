import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeCategory } from "./Home/components/HomeCategory";
import { HomeInfo } from "./Home/components/HomeInfo";
import { HomeQuestion } from "./Home/components/HomeQuestion";
import "./Home.css";
import men from "./Home/images/men.webp";
import jewelery from "./Home/images/jewelery.jpg";
import electronics from "./Home/images/electronics.jpeg";
import women from "./Home/images/women.jpg";
import { Footer } from "../components/Footer";

export function Home(props){
    const [products, setProducts] = useState(null);

    useEffect(() => {
        function fetchProducts(){
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    setProducts(json);
                })     
        }
    
        fetchProducts();
    }, [])

    return (
        <>
            <div className="container-fluid hero d-flex align-items-center">
                <div className="col-md-6 hero-text p-5 d-flex flex-column justify-content-center">
                    <h1>
                        Amazing e-commerce platform for everyone.
                    </h1>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                        <button className="btn custom-bg cta-btn mt-3 border">
                            <Link to="/pages/Shop" className="text-white">
                                Shop Now
                            </Link> 
                        </button>
                </div>
                    
                <div className="col-md-6 align-self-stretch hero-banner"></div>
            </div>

            <div className="container-fluid d-flex justify-content-evenly info-section my-5 p-5 bg-dark">
                <HomeInfo
                    infoIcon="fa-solid fa-user-lock"
                    infoTitle="Secure Payment"
                    info="100% secure payments"
                />
                <HomeInfo
                    infoIcon="fa-solid fa-truck"
                    infoTitle="Free Shipping"
                    info="Free on order over $300"
                />
                <HomeInfo
                    infoIcon="fa-solid fa-right-left"
                    infoTitle="30 Day Return"
                    info="30 Day money guarantee"
                />
                <HomeInfo
                    infoIcon="fa-solid fa-circle-question"
                    infoTitle="24/7 Support"
                    info="Quick support"
                />
            </div>

            <div className="container-fluid my-5">
                <h1 className="mb-5 text-center fw-bold">TRENDING</h1>
                <div className="d-flex justify-content-evenly flex-wrap gap-5">
                    {products && products.filter((e, i) => i < 4).map((item, index) =>
                        <div key={index} className="col-lg-2 col-md-5 col-sm-7 col-8">
                            <div key={item.id}
                                className="d-flex justify-content-center align-items-center trending-item 
                                 p-3 position-relative">
                                <img src={item.image} />
                                <div className={"custom-bg text-white " +
                                    ((item.id === 2 || item.id === 3) ? "ribbon" : "no-ribbon")}>
                                        {item.id === 2 ? ("SALE") : ("")}
                                        {item.id === 3 ? ("50% OFF") : ("")}
                                </div>
                            </div>
                            <h5 className="fw-bold mt-2 trending-title">{item.title}</h5>
                            <h3 className="custom-color">${item.price}</h3>
                        </div>
                    )}
                </div>
            </div>

            <div className="m-2 py-5 our-products">
                <h1 className="mb-5 text-center text-white fw-bold">CATEGORIES</h1>
                <div className="container d-flex flex-wrap justify-content-around row-gap-5 our-categories">
                    <HomeCategory
                        category="MEN"
                        bgImage={men}
                        setIndex={props.setIndex}
                        index={1}
                    />
                    <HomeCategory
                        category="JEWELERY"
                        bgImage={jewelery}
                        setIndex={props.setIndex}
                        index={2}
                    />
                    <HomeCategory
                        category="ELECTRONICS"
                        bgImage={electronics}
                        setIndex={props.setIndex}
                        index={3}
                    />
                    <HomeCategory
                        category="WOMEN"
                        bgImage={women}
                        setIndex={props.setIndex}
                        index={4}
                    />
                </div>
            </div>
            
            <div className="my-5">
                <h1 className="py-5 text-center fw-bold">F.A.Qs</h1>
                <div className="d-flex flex-column justify-content-center">
                    <HomeQuestion
                        question="What countries do you ship to ?"
                        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                    <HomeQuestion
                        question="What payment methods do you accept ?"
                        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                    <HomeQuestion
                        question="How long does order processing take ?"
                        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                    <HomeQuestion
                        question="How do I cancel/modify an order ?"
                        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                </div>
            </div>

            <Footer />
        </>
    )
}