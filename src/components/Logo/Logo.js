import React from "react";
import './Logo.css';
import brain from "./brain.png";
import Tilt from 'react-tilt';




const Logo = () => {
    return( 
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner"><img style={{paddingTop: '15px'}} src={brain} alt='logo' /></div>
            </Tilt>
        </div>
     );
}


export default Logo;