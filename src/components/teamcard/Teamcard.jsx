import { useState } from "react";

import "./teamcard.css";
import { TeamImage } from "../../assets";
const Teamcard = () => {
  const [cards] = useState([
    {
      ImageCard: TeamImage,
      name: "Manojgowda1",
      role: "Ceo-Founder",
    },
    {
      ImageCard: TeamImage,
      name: "Manojgowda2",
      role: "Ceo-Founder",
    },
    {
      ImageCard: TeamImage,
      name: "Manojgowda3",
      role: "Ceo-Founder",
    },
    {
      ImageCard: TeamImage,
      name: "Manojgowda4",
      role: "Ceo-Founder",
    },
    {
      ImageCard: TeamImage,
      name: "Manojgowda5",
      role: "Ceo-Founder",
    },
    {
      ImageCard: TeamImage,
      name: "Manojgowda6",
      role: "Ceo-Founder",
    },
    {
      ImageCard: TeamImage,
      name: "Manojgowda4",
      role: "Ceo-Founder",
    },
    {
      ImageCard: TeamImage,
      name: "Manojgowda5",
      role: "Ceo-Founder",
    },
    {
      ImageCard: TeamImage,
      name: "Manojgowda6",
      role: "Ceo-Founder",
    },
  ]);
  return (
    <div className="teamcontainerteam">
      <div className="cards">
        {cards.map((card, i) => (
          <div key={i} className="cardicon">
            <img src={card.ImageCard} alt="" />
            <p>
              {card.name}
            </p>
            <h6>
              {card.role}
            </h6>
          </div>
        ))
        }
      </div>

    </div>
  )
}

export default Teamcard;
