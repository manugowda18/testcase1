import logo from "./s2.png";
import "./image.css";

const Image = () => {
    return (
        <div className="App">
            <div className="Image-container">
                <img src={logo} className="Bottom-image" alt="bottom-logo" />
            </div>
        </div>
    );
};

export default Image;
