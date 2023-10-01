import { useState } from "react";
import { close, menu } from "../../assets";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {


  const [toggle, setToggle] = useState(false);
  const closeSidebar = () => {
    setToggle(false); // Close the sidebar
  };


  // >

  return (
    <div className="navbarabc" >
      <nav className="w-full flex py-6 justify-between items-center navbar">

        <div className=" sm:flex hidden  flex-1 justify-start items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"
              }  p-6  absolute top-10 right-30 mx-4 my-2 min-w-[140px] min-h-[190px] rounded-xl sidebar`}
          >
            <ul className="list-none sm:flex hidden justify-center  items-start flex-1 flex-col">
              <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
              <li><Link to="/storyline" onClick={closeSidebar}>StoryLine</Link></li>
              <li><Link to="/elementals" onClick={closeSidebar}>Elementals</Link></li>
              <li><Link to="/roadmap" onClick={closeSidebar}>Roadmap</Link></li>
              <li><Link to="/team" onClick={closeSidebar}>Team</Link></li>
              <li><Link to="/career" onClick={closeSidebar}>Career</Link></li>
            </ul>
          </div>
        </div>

        <div className="sm:hidden flex flex-1 justify-start items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              }  p-6 bg-none absolute top-20 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none  justify-center  items-start flex-1 flex-col">
            <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
              <li><Link to="/storyline" onClick={closeSidebar}>StoryLine</Link></li>
              <li><Link to="/elementals" onClick={closeSidebar}>Elementals</Link></li>
              <li><Link to="/roadmap" onClick={closeSidebar}>Roadmap</Link></li>
              <li><Link to="/team" onClick={closeSidebar}>Team</Link></li>
              <li><Link to="/career" onClick={closeSidebar}>Career</Link></li>
            </ul>
          </div>
        </div>
        <a href="https://opensea.io/" target="_blank" rel="noreferrer">
          <button
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)", // Glass background
              color: "white",
              padding: "4px 16px",
              border: "1px solid white", // White border
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              fontFamily: "'Tektur', cursive", // Change font family
              fontWeight: "bold", // Change font weight
              textTransform: "uppercase", // Change text transform
              transition: "background-color 0.3s ease",
              letterSpacing: "1px",
            }}
            className="mr-2"
          >
            BUY
          </button>
        </a>
        <span className="ml-2" />
        <a
          href="https://twitter.com/volyrix"
          className="text-white text-2xl mr-4 "
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>

        {/* Add Discord Icon */}
        <a
          href="#"
          className="text-white text-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord />
        </a>
      </nav>
    </div>
  );
};



export default Navbar;