import React from "react";
import './Logo.css';
import brain from "./brain.png";





const Logo = () => {
    return( 
        <div className="ma4 mt0">
            <div className="color br2 shadow-3" style={{width: '100px'}}>
            <img style={{padding: '15px'}} src={brain} alt='logo' />
            </div>
        </div>
     );
}


export default Logo;