
import React from 'react';
import Videobg from "../images/Hero2-optimization.mp4"
import './Home.css';
import HomeBody from "../homepage/Body";
import TextAniUpToDown from "../SecondHome/Text_Ani_UpTodown/Text_Ani_UpTodown"

function secondHome() {
    return (
        <div>
            <div className='secondHome'>

                <video src={Videobg} autoPlay muted loop />
                <div className='Text_Anem'>
                    <TextAniUpToDown />
                </div>

            </div>
            <HomeBody />

            <HomeBody />
            <HomeBody />
            <HomeBody />
            <HomeBody />
        </div>

    )
}

export default secondHome;