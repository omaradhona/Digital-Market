import { CategoriesSection } from './Header/CategoriesSection'

export function Header(props){
    return (
        <div className="w-100 border">
            <CategoriesSection
                toggle={props.toggleCategory}
                activeIndex={props.activeCategoryIndex}
            />
        </div>
    )
}