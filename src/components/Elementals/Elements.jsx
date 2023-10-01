import "./about.css"
import {
  Navbar, Elementalcards, CardData
} from "../index";
const Elementals = () => {
  return (
    <div className='background-container1'>
      <Navbar />
      <div className="element-cards-container">
        <Elementalcards details={CardData} />
      </div>
    </div>
  )
}

export default Elementals;
