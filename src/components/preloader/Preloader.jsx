import { useEffect } from "react";
import { Preloaderabc , Prelogo} from "../../assets";
import "./preloader.css";
import { preLoaderAnim } from "../../animations"; 

const Preloader = () => {

   useEffect(() => {
    preLoaderAnim()
   }, []);
   

    return (
        <div className="preloader">
            <span><img src={Preloaderabc} alt="" /></span>
            <div className="texts-container">
                <span>BUY</span>
                <span>FIGHT</span>
                <span>OCCUPY</span>
            </div>
        </div>
    )
}

export default Preloader;
