import { FiveStars } from "./FilterRatings/FiveStars"
import './FilterRatings.css'

export function FilterRatings(props){
    return (
        <>
            <label className="radio-container"><FiveStars index="5" />
                <input type="radio" onChange={() => props.toggleRate(4.5)} />
                <span className="checkdot"></span>
            </label>
            <label className="radio-container"><FiveStars index="4" />
                <input type="radio" onChange={() => props.toggleRate(3.5)} />
                <span className="checkdot"></span>
            </label>
            <label className="radio-container"><FiveStars index="3" />
                <input type="radio" onChange={() => props.toggleRate(2.5)} />
                <span className="checkdot"></span>
            </label>
            <label className="radio-container"><FiveStars index="2" />
                <input type="radio" onChange={() => props.toggleRate(1.5)} />
                <span className="checkdot"></span>
            </label>
            <label className="radio-container"><FiveStars index="1" />
                <input type="radio" onChange={() => props.toggleRate(0.5)}/>
                <span className="checkdot"></span>
            </label>
        </>
    )
}