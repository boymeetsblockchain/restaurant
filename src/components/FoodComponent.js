import "./FoodComponent.css"
import FoodItem from "./FoodItem"
import { AiTwotoneStar } from "react-icons/ai"
import food from "../data/food.jpeg"
import foodss from "../data/foodss.png"
import mqdefault from "../data/mqdefault.png"
import OkraSoup from "../data/nutrition.png"
import nutrition from "../data/OkraSoup.png"


const FoodsComponent = () => {
  return (
    <main className='food-component'>
        <div className='title'>
            <h2>Popular food</h2>
            <span>See more</span>
        </div>
        <div className="food-list">
        <FoodItem icon={<AiTwotoneStar />} rate={3.5} image={foodss} amount={2400} name="vegetable and akpu"/>
        <FoodItem icon={<AiTwotoneStar />} rate={4.8} image={mqdefault} amount={1400} name="mqdefault" />
        <FoodItem icon={<AiTwotoneStar />} rate={4.1} image={OkraSoup} amount={2000} name="Okro and akpu" />
        <FoodItem icon={<AiTwotoneStar />} rate={3.9} image={nutrition} amount={4300} name="friut salad" />
            
        </div>
    </main>
  )
}

export default FoodsComponent