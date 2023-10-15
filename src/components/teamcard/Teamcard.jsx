import { useState } from "react";

import "./teamcard.css";
import { TeamImage } from "../../assets";
const Teamcard = () => {
  const [cards] = useState([
    {
      ImageCard: TeamImage,
      name: "0x_Myth ☣️",
      role: "⟪Web3 Dev⟫",
    },
    {
      ImageCard: TeamImage,
      name: "Ox_Nyx ☢️  ",
      role: "⟪Web3 Dev⟫",
    },
    {
      ImageCard: TeamImage,
      name: "Ox_Nyx ☢️  ",
      role: "⟪Web3 Dev⟫",
    },
    {
      ImageCard: TeamImage,
      name: "Ox_Nyx ☢️  ",
      role: "⟪Web3 Dev⟫",
    },
    {
      ImageCard: TeamImage,
      name: "Ox_Nyx ☢️  ",
      role: "⟪Web3 Dev⟫",
    },
    {
      ImageCard: TeamImage,
      name: "Ox_Nyx ☢️  ",
      role: "⟪Web3 Dev⟫",
    },
    {
      ImageCard: TeamImage,
      name: "Ox_Nyx ☢️  ",
      role: "⟪Web3 Dev⟫",
    },
    {
      ImageCard: TeamImage,
      name: "Ox_Nyx ☢️  ",
      role: "⟪Web3 Dev⟫",
    },
    {
      ImageCard: TeamImage,
      name: "Ox_Nyx ☢️  ",
      role: "⟪Web3 Dev⟫",
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
