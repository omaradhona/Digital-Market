import { FiveStars } from "./FilterRatings/FiveStars";
import './FilterRatings.css';

export function FilterRatings(props){
    return (
        <>
            <label className="radio-container"><FiveStars colorfulStars="5" firstIteration="0" />
                <input type="radio" name="radio" onChange={() => props.toggleRate(4.5)} />
                <span className="checkdot"></span>
            </label>
            <label className="radio-container"><FiveStars colorfulStars="4" firstIteration="0" />
                <input type="radio" name="radio" onChange={() => props.toggleRate(3.5)} />
                <span className="checkdot"></span>
            </label>
            <label className="radio-container"><FiveStars colorfulStars="3" firstIteration="0" />
                <input type="radio" name="radio" onChange={() => props.toggleRate(2.5)} />
                <span className="checkdot"></span>
            </label>
            <label className="radio-container"><FiveStars colorfulStars="2" firstIteration="0" />
                <input type="radio" name="radio" onChange={() => props.toggleRate(1.5)} />
                <span className="checkdot"></span>
            </label>
            <label className="radio-container"><FiveStars colorfulStars="1" firstIteration="0" />
                <input type="radio" name="radio" onChange={() => props.toggleRate(0.5)}/>
                <span className="checkdot"></span>
            </label>
        </>
    )
}