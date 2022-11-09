import React from "react"
import '../CSS/Test.css'
import HideAndShowPass from "./HidePass/HideAndShowPass"
import '../CSS/form.css'

 function Test() {

    return (
        
        <div className='contenedor-test'> 
          
            <img className='imagen-test' src={require("../images/recep.jpeg")} alt='imagen test'/>
             <form id="stripe-login"> 
                <div className="">
                  <div className='field padding-bottom--24'>
                      <label for="user">Usuario</label> <input type="user" name="usuario"></input><br></br>
                          <div>
                              <label for="password">Contraseña</label>
                              <HideAndShowPass/>
                          </div>
                          <div class="reset-pass">
                        <a href="../componentes/admin.js">Olvidaste tu contraseña?</a>
                          </div>
                          
                          <input type="submit" name="submit" value="Continuar" ></input>
                  </div>
                </div>
                
             </form>
        </div>
        
        
    )
}
   


export default Test;