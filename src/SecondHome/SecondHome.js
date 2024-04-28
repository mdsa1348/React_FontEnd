import React from 'react';
import Body from '../homepage/Body';

import BodyFirst from "./BodyFirst";
function Home() {
    return (
        <section>
            <div className='Home'>
                <div>
                    <BodyFirst />

                </div>
                <Body/>
            </div>
            
        </section>

    )
}

export default Home;