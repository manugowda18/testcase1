import "./Team.css";
import {
  Navbar, Teamcard 
} from "../index";
import SimpleBar from "simplebar-react";

import { Girl23 , TeamRightImage} from "../../assets";
const Team = () => {
  return (
    <div className="team-container">
      <Navbar/>
      <div className="full-team">

        <div className="rightteam">
          <img src={TeamRightImage} alt="" />
        </div>
        <div className="leftscroll">
          <SimpleBar style={{ maxHeight: "90%" }}>
            <div className="team1">
              <div className="smdivice">
                <h3>MANIFESTO //</h3>
              </div>
              <div>
                <h1>MANIFESTO //</h1>
              </div>
              <div>
                <h5>
                  77-Bit is the other side of reality.
                </h5>
                <br />
                <h6>
                  An interoperable ecosystem of games, a manga series, exclusive products, live events, and much more. Travel through our multiverse portals to play immersive games, chat and hang out, using your NFT as your avatar. Collect, exchange and own rare items. Adventure, level up and fight. 77-Bit is building a new network state. <span></span>
                </h6>
                <br />
                <h6>
                  The line between the physical and digital world is blurring.
                </h6>
                <br />
                <div className="scrolltex">
                  <span>Scroll ↓ </span>
                </div>
              </div>
            </div>
            <div className="linebar">
            </div>
            <div className="teamcard">
              <div className="texts">
                <h1>
                  TEAM //
                </h1>
                <h6>
                  The line between the physical and digital world is blurring.
                </h6>
              </div>
              <div className="idcards">
                <Teamcard />
              </div>
            </div>
          </SimpleBar>
        </div>
      </div>
    </div >
  )
}

export default Team;
