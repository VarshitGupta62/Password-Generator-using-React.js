import React from 'react'
import "./css/main.css"

function PasswordGenerator() {

    const [length, setLength] =  React.useState(8)

    const setPassword = () =>{
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (let i=0; i < length; i++) {
             
        }
    }


  return (
 <>

    <div  className="container">
    <h2 style={{textAlign:"center"}} >Password Generator</h2>
    <input type="text" value="" className="password-input" placeholder="Password"/>
    <button  className="copy-button">Copy</button>
    <br/>
    <br/>
    <input type="range" min={6} max={45} value={length} onChange={(e) => setLength(e.target.value)} />
    <label>Length: {length}</label>
    <input type="checkbox" />
    <label htmlFor="numberInput">Numbers</label>
    <input type="checkbox" />
    <label htmlFor="characterInput">Characters</label>
    </div>

</>
  )
}

export default PasswordGenerator