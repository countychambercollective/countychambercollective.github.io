import React from "react";
import StairHeading from "../components/StairHeading";


function Home() {

    return (
        <>
            <div>
                <StairHeading
                   words={["The", "County", "Chamber", "Collective", ]}
                     />
            </div>

            <div id="subtitle">
            
            <p>A group of musicians bringing small ensemble, accessible music to Prince Edward County</p>

            </div>
        </>
    ) 
}

export default Home;