import React from 'react';
import "./announcemnt.css";
import Marquee from 'react-fast-marquee';

const announcement = () => {
    return (
        <div className='announcement'>
            <Marquee speed={60} gradientColor={true} pauseOnHover>
            <div className="announcement-text text1" >
                <span>⚔️⚔️Spend too much amount in the phase for 9000⚔️⚔️</span>
                <span>🗡️🗡️Spend too much amount in the phase for 2000🗡️🗡️</span>
            </div>
            <div className="announcement-text text2" >
                <span>⚔️⚔️Spend too much amount in the phase for 9000⚔️⚔️</span>
                <span>🏹🏹Spend too much amount in the phase for 2000🏹🏹</span>
            </div>
            </Marquee>
        </div >
       
    )
}

export default announcement
