import React, { useState } from 'react';
import '../HidePass/HidePass.css';

function HideAndShowPass(){
    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
    
    return(
        <div className="showpass">
            
                <input type={show?"text":"password"} className='smartpass'/>
            
                <label onClick={handleShow}>{show?"Esconder":"Mostrar"}</label>
           
        </div>

        );
    }

export default HideAndShowPass;
