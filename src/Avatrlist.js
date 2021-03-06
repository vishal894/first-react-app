import React from 'react';
//import './Avatar.css';


const Avatrlist=(props)=>
{
    return <div className="Avatarstyle ma4 bg-light-purple dib pa4 grow">

            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt='not found'></img> 
            <h1>{props.name}</h1>
            <p>{props.work}</p>
    </div>
}
export default Avatrlist