import { useEffect, useState } from 'react';
import "./HomeMain.css";
import {
    Image, Fire, Announcement,Navbar,Preloader,LogoContent
} from "../index";
import AudioLoop from "../audio/audio";

const HomeMain = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate some loading time
        setTimeout(() => {
            setIsLoading(false);
        }, 20); // Adjust the duration as needed
    }, []);

    return (
        <>
        <Preloader/> 
        <div className={`background-container ${isLoading ? 'loading' : ''}`}>
            <Navbar/>
            <Announcement />
            <Fire />
            <Image />
            <AudioLoop />
            <LogoContent/>
        </div>
        </>
    )
}

export default HomeMain;
