import React, { useState } from 'react'
import "./css/main.css"

function UseEffectTwo() {
    const [mode , setMode] = useState(true);

    function changeMode(){
        setMode(!mode);
    }
    // const  style1 = mode ? "card card-one" : "card card-two"; 
    const styleClass = mode ? 'light' :  'dark'

  return (
    <>
        <div  className='divStyle' style={{textAlign:"center"}} >
            <div className={styleClass} >
            <h1>this is useState</h1>
             {/* <p>{style1}</p> */}
             <button onClick={ changeMode } >Change Color !</button>
             <br/>
             <br/>
            </div>
        </div>
    </>
  )
}

export default UseEffectTwo