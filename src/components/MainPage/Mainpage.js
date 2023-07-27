import React, { useState } from 'react';
import Card from '../Card/Card';
import data from '../assets/data';
import './mainpage.css'

const MainPage = () => {
    const [informations,setInformation]=useState(data)
    return (
      <div className='inclusive'>
    <div className='card-container'>
    {
        informations.map((i)=>
       <Card 
        name={i.name}
        img={i.img}
        job={i.job}
        about={i.about}
        id={i.id}
        />
        )
    }
    </div>
    </div>
    
  )
}

export default MainPage
