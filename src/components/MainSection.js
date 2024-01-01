import { useRef, useEffect } from "react";
import { ResultsHeader } from "./MainSection/ResultsHeader";
import { ProductsSection } from "./MainSection/ProductsSection";

export function MainSection(props){
    const productsContainer = useRef(null);

    useEffect(() => {
        props.setItemsFound(productsContainer.current.children.length)
    }, [props.products, props.category, props.minRate])

    return (
        <>
            <ResultsHeader
                itemsFound={props.itemsFound}
                toCrammed={props.toCrammed}
                toGrid={props.toGrid}
                tolist={props.tolist}
            />
                    
            <div className="row mt-5" ref={productsContainer}>
                <ProductsSection 
                    products={props.products}
                    category={props.category}
                    minPrice={props.minPrice}
                    maxPrice={props.maxPrice}
                    minRate={props.minRate}
                    view={props.view}
                />
            </div>
        </>
    )
}