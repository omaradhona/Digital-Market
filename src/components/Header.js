import { SearchSection } from './Header/SearchSection'
import { CategoriesSection } from './Header/CategoriesSection'

export function Header(props){
    return (
        <div className="w-100 border">
            <SearchSection
                toGrid={props.toGrid}
                toCrammed={props.toCrammed}
                tolist={props.tolist}
                toAscending={props.toAscending} 
                toDescending={props.toDescending}
            />
            <CategoriesSection
                toggle={props.toggleCategory}
                activeIndex={props.activeCategoryIndex}
            />
        </div>
    )
}