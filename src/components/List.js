import React from 'react';

function List(props)  {
  
    const double = numbers.map((number) => 
    <li key={number.toString()}>{number}</li>
    )
    return (
        <div>
            <ul>{double}</ul>
        </div>
    );
}
const numbers=[1,2,3,4,5,6];
export default List;
