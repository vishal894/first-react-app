import React from 'react';
import 'tachyons';
import './Avatar.css'
import Avatrlist from './Avatrlist';

const Avatar = ()=>
{
     const avatarlistarray=[
         {
             id:1,
             name:"vishal",
             work:"developer"
         },
         {
            id:1,
            name:"Ayush",
            work:"Marketting manager"
        },
        {
            id:1,
            name:"vikash",
            work:"front developer"
        },
        {
            id:1,
            name:"vivek",
            work:"backend developer"
        },

     ]
     return <div>
            <h1 className="main tc">Welcome to my new project</h1>
            <Avatrlist id={avatarlistarray[0].name}
                        name={avatarlistarray[0].name}
                        work={avatarlistarray[0].work}/>
            <Avatrlist id={avatarlistarray[1].name}
                        name={avatarlistarray[1].name}
                        work={avatarlistarray[1].work}/>
            <Avatrlist id={avatarlistarray[2].name}
                        name={avatarlistarray[2].name}
                        work={avatarlistarray[2].work}/>
            <Avatrlist id={avatarlistarray[3].name}
                        name={avatarlistarray[3].name}
                        work={avatarlistarray[3].work}/>
                        <br></br>
            <button> Subcribe </button>
            

            
    </div>
}
export default Avatar