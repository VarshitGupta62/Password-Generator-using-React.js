import React, { useEffect, useState } from 'react'

function EffectHook() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    
    useEffect(() => {
        console.log('it is mount');
    });

    useEffect(() => {
        console.log('Count value is change.'+ countOne);

        return () => {
            console.log("It is Unmount :" + countOne);
        };
    } , [countOne]);

    return (
     <>
     <div style={{textAlign:'center'}} >
        <h1>Effect Hook</h1>
        <p>Count :{countTwo}</p>
        <button onClick={() => setCountTwo(countTwo + 1)}  >Mount Button</button>
        <br/><br/>
        <p>Count : {countOne}</p>
        <button onClick={() => setCountOne(countOne + 1)}>Dependency Button</button>
     </div>
     </>
  )
}

export default EffectHook