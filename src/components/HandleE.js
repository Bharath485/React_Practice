import React,{ useState} from 'react';

function HandleE(){
  const[incerse,setIncrese]=useState(0)
  const[name,setName]=useState("");
  return (
    <div>
      <h1>Count:{incerse}</h1>
      <button onClick={()=>setIncrese(incerse+1)}>Display Name</button>
      <h1>Name:{name}</h1>
      <button onClick={()=>setName("Bharath")}>DisplayName</button>
    </div>
  );
}

export default HandleE;





