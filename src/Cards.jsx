import React from 'react'
import card from './card.css'
export default function Cards() {
 
    const cards=[
        {
            id:'1',
            img:'https://th.bing.com/th/id/OIP.y6QhVkd-dy3enL2ibkyf6QAAAA?w=463&h=500&rs=1&pid=ImgDetMain',
            title:'Mini-LED TVs Are About to Get Massive',
            content:'What’s Happening? Mini-LED technology has been making waves, and at CES 2024, we saw some truly gigantic mini-LED TVs. For instance, TCL showcased a whopping 115-inch model called the QM891G, while Hisense countered with a 110-inch model in its premium ULED X lineup.',
            
        },
        {
          id:'2',
          img:'https://airandspace.si.edu/sites/default/files/images/7151h.jpg',
          title:'OLED TVs Will Get Much Brighter',
          content:'Neural Headphones: These futuristic headphones use neural networks to adapt sound to your preferences. They learn what you like and adjust accordingly. ',
          
      },
      {
        id:'3',
        img:'https://th.bing.com/th/id/OIP.sgNU8oWkwiQBy7MoBqyyVQHaG_?w=698&h=659&rs=1&pid=ImgDetMain',
        title:'Wireless Charging Gets a Boost with Qi2',
        content:'What’s New? Qi wireless charging has been around, but now we have Qi2, which promises faster and more efficient charging for our devices.Why It’s Exciting: Imagine your phone juicing up in a flash without needing to fumble with cables. Convenience level: 100%!',
        
    },
    {
      id:'4',
      img:'https://th.bing.com/th/id/OIP.L6qGxq599jvIV4JgiJgm0gAAAA?w=300&h=272&rs=1&pid=ImgDetMain',
      title:'Bluetooth Auracast and Neural Headphones',
      content:'Auracast: Bluetooth Auracast is a new audio standard that aims to improve sound quality over Bluetooth connections. Say goodbye to those occasional audio hiccups!',
      
  },
    ]
   
   
  return (
    
    <div className='App' style={{color:'black'}}>
      {
 cards.map((item)=>
         
      
         <>
       <div className="main-container-card">
       <div className="cards-block">
       <div className="card-bg"> <img src={item.img} alt="My Image" className='img-name'  /></div>
          <h3>{item.title}</h3> 
          <h4>{item.content}</h4>
          <button className='btn' >❤️</button> 
        </div>
       
        <div className="cards-block">
        <div className="card-bg"> <img src={item.img} alt="My Image" className='img-name'  /></div>
        <h3>{item.title}</h3> 
        <h4>{item.content}</h4>
          <button className='btn'>❤️</button> 
        </div>
        <div className="cards-block">
        <div className="card-bg"> <img src={item.img} alt="My Image" className='img-name'  /></div>
        <h3>{item.title}</h3> 
        <h4>{item.content}</h4>
          <button className='btn'>❤️</button> 
        </div>
        <div className="cards-block">
        <div className="card-bg"> <img src={item.img} alt="My Image" className='img-name'  /></div>
        <h3>{item.title}</h3> 
        <h4>{item.content}</h4>
          <button className='btn'>❤️</button> 
        </div>
      
       </div>
      
          </>
)
      }
    </div>
  )
}
