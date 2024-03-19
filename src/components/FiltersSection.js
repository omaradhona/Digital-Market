import { Accordion } from "./FiltersSection/Accordion";
import { FilterCheckboxes } from "./FiltersSection/FilterCheckboxes";
import { FilterItems } from "./FiltersSection/FilterItems";
import { FilterRatings } from "./FiltersSection/FilterRatings";
import { PriceFilter } from "./FiltersSection/PriceFilter";
import { useState, useEffect } from "react";
import "./FiltersSection.css";

export function FiltersSection(props){
    const [isShown, setIsShown] = useState(true);

    useEffect(() => {
        if(window.innerWidth <= 768){
            setIsShown(false);
        }
    }, [])

    return (
        <>
            <button className="w-100 border-0 rounded-3 py-2 toggle-filters text-white my-2"
                onClick={() => setIsShown(!isShown)}>
                <span>{isShown ? "HIDE FILTERS" : "SHOW FILTERS"}</span>
                <i className={isShown ? "fa-angle-up fa-solid ms-3" : "fa-angle-down fa-solid ms-3"}></i>
            </button>
            <div className="accordion" id="accordionExample"
                style={{
                    maxHeight: isShown ? "900px" : "0px",
                    overflowY: isShown ? "visible" : "hidden",
                    transition: "0.3s",
                }}>
                <Accordion id="headingThree" target="collapseThree" title="Sizes"
                    content={<FilterCheckboxes />} />
                <Accordion id="headingFour" target="collapseFour" title="Items" content={<FilterItems />} />
                <Accordion id="headingFive" target="collapseFive" title="Ratings"
                    content={
                        <FilterRatings
                            toggleRate={props.toggleRate}
                        />
                    }
                />
                <Accordion id="headingSix" target="collapseSix" title="Price"
                    content={
                        <PriceFilter
                            handleChangeMaxPrice={props.handleChangeMaxPrice}
                            handleChangeMinPrice={props.handleChangeMinPrice}
                        />
                    }
                />
            </div>
        </>
    )
}