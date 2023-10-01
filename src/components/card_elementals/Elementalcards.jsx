/* eslint-disable react/prop-types */
import "./styleElements.css";
import { MusicImage } from "../../assets";

const Elementalcards = (props) => {
    return (
        <>
            {props.details.map((value, index) => (
                <div className="full-card" key={index}>
                    <div className="text-container">
                        <h1>
                            {value.head}
                        </h1>
                    </div>
                    <div className="card-img">
                        <a href=""> <img src={value.img} alt="" />
                            <div className="img-overlay">
                                <p>{value.p}</p>
                            </div></a>
                    </div>
                </div>
            ))};
            <div className="small-divice">
                <img src={MusicImage} alt="" />
                <h3>Join Us on Desktop </h3>
            </div>
        </>
    );
};

export default Elementalcards;
