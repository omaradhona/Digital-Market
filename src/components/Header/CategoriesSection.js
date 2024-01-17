import { CategoryDiv } from "./CategoriesSection/CategoryDiv"
import './CategoriesSection.css'

export function CategoriesSection(props){
    return (
        <div className="d-flex flex-wrap justify-content-center py-2 categories">
            <CategoryDiv isActive={props.activeIndex===0} toggle={() => props.toggle(0)} category="ALL" stock="210" />
            <CategoryDiv isActive={props.activeIndex===1} toggle={() => props.toggle(1)} category="MEN'S CLOTHING" stock="4" />
            <CategoryDiv isActive={props.activeIndex===2} toggle={() => props.toggle(2)} category="JEWELERY" stock="49" />
            <CategoryDiv isActive={props.activeIndex===3} toggle={() => props.toggle(3)} category="ELECTRONICS" stock="6" />
            <CategoryDiv isActive={props.activeIndex===4} toggle={() => props.toggle(4)} category="WOMEN'S CLOTHING" stock="151" />
        </div>
    )
}