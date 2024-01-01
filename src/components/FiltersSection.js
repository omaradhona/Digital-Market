import { Accordion } from "./FiltersSection/Accordion"
import { FilterCheckboxes } from "./FiltersSection/FilterCheckboxes"
import { FilterItems } from "./FiltersSection/FilterItems"
import { FilterRatings } from "./FiltersSection/FilterRatings"
import { PriceFilter } from "./FiltersSection/PriceFilter"

export function FiltersSection(props){
    return (
        <div className="accordion shadow" id="accordionExample">
            <Accordion id="headingThree" target="collapseThree" title="Sizes" content={<FilterCheckboxes />} />
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
    )
}