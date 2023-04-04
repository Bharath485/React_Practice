import React,{useState} from 'react';

function Class(){
  const month=new Date().toLocaleDateString();
  const[date,setDate] = useState(month)
  const Time = new Date().toLocaleTimeString();
  const[data,setData]=useState(Time)
  const updateTime=()=>{
    const Time = new Date().toLocaleTimeString();
    setData(Time);
  }
  setInterval(updateTime,1000)
  const updateDate=()=>{
    const month=new Date().toLocaleDateString();
    setDate(month);
  }
  setInterval(updateDate,86400)
 
  return (
    <div>
      <h1>Time= {data}</h1>
      <h1>Date={date}</h1>
    </div>
  );
}

export default Class;
