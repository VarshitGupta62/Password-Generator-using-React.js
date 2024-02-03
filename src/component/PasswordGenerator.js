import React from 'react'
import { useEffect , useState } from 'react';
import "./css/main.css"

function PasswordGenerator() {

    const [length, setLength] =  useState(8);
    const [numAllow , setNumAllow]=useState(false);
    const [symAllow  ,setSymAllow] = useState(false);
    const [password  , setPassword ]= useState("");

    const passwordGenerate = () =>{
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        // console.log(str);
        let pass = '';
        if (numAllow) str += "1234567890";
        if (symAllow) str += "`~!@#$%^&*";

        for (let i=1; i <= length; i++) {
          let  char = Math.floor(Math.random() * str.length + 1);
          // console.log(char);
          pass = pass + str.charAt(char);
        }
          // console.log(pass);
          setPassword(pass);
        }

     
    useEffect(() => {

       passwordGenerate();

    },[ length , numAllow  , symAllow , setPassword  ]);


  return (
 <>

    <div  className="container">
    <h2 style={{textAlign:"center"}} >Password Generator</h2>
    <input type="text" value={password} className="password-input" placeholder="Password"/>
    <button  className="copy-button">Copy</button>
    <br/>
    <br/>
    <input type="range" min={6} max={35} value={length} onChange={(e) => setLength(e.target.value)} />
    <label>Length: {length}</label>
    <input type="checkbox" checked={numAllow} onChange={() => setNumAllow(!numAllow)}/>
    <label htmlFor="numberInput">Numbers</label>
    <input type="checkbox" checked={symAllow}  onChange={() => setSymAllow(!symAllow)}/>
    <label htmlFor="characterInput">Characters</label>
    </div>

</>
  )
}

export default PasswordGenerator;