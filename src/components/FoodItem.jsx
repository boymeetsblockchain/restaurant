import { NumericFormat } from 'react-number-format';
import { BsFillCartPlusFill } from "react-icons/bs"
import "./FoodItem.css"

const FoodItem = ({icon, image, amount, rate, name}) => {
  return (
    <div className='food-items'>
        <div className='food-rating'>
              <span style={{ color:"#d1681d"}}>{icon}</span>
              <h4>{rate}</h4>
        </div>
        <img src={image} className="food-image" alt=""/>
        <h2 className='food-name'>{name}</h2>
          <div className='food-amount'>
              <span>
                  <NumericFormat value={amount} displayType={'text'} thousandSeparator={true} prefix="$" />
              </span>
              <BsFillCartPlusFill style={{ cursor: "pointer" }} />
        </div>

    </div>
  )
}

export default FoodItem