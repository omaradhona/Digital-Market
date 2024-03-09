import './PriceFilter.css';

export function PriceFilter(props){
    return (
        <>
            <div className="d-flex justify-content-around filter">
                <input className="filter-input" type="text"
                    onChange={(e) => props.handleChangeMinPrice(e.target.value)} />
                <span>-</span>
                <input className="filter-input" type="text"
                    onChange={(e) => props.handleChangeMaxPrice(e.target.value)} />
            </div>
        </>
    )
}