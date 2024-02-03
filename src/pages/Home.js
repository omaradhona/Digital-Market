import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeCategory } from "./Home/components/HomeCategory";
import { HomeInfo } from "./Home/components/HomeInfo";
import { HomeQuestion } from "./Home/components/HomeQuestion";
import "./Home.css";
import men from "./Home/images/men.webp";
import jewelery from "./Home/images/jewelery.jpg";
import electronics from "./Home/images/electronics.jpeg";
import women from "./Home/images/women.jpg";

export function Home(){
    return (
        <>
            <div className="container-fluid hero border">
                <div className="hero-text text-white">
                    <h1>Shop Now</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="m-2">
                <h1 className="py-5 text-center fw-bold">What we sell</h1>
                <div className="container-fluid d-flex flex-wrap our-categories border">
                    <HomeCategory
                        category="MEN'S CLOTHING"
                        bgImage={men}
                    />
                    <HomeCategory
                        category="JEWELERY"
                        bgImage={jewelery}
                    />
                    <HomeCategory
                        category="ELECTRONICS"
                        bgImage={electronics}
                    />
                    <HomeCategory
                        category="WOMEN'S CLOTHING"
                        bgImage={women}
                    />
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-evenly info-section my-5 p-5 bg-danger">
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
        </>
    )
}