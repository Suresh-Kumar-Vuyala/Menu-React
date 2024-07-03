import React from 'react';
import data from './data';











const Item=(props)=>{




    return(
        <>
             <section className='item-container'>
                <img className='img' src={props.Data.img}></img>
                <section className='item-elements' >
                    <div  className='title-price'>
                    <h4 className='h4-1'>{props.Data.title}</h4>
                    <h4 className='h4-2'>{props.Data.price}</h4>
                    </div>
                    <p>{props.Data.desc}</p>

                </section>
                    
             </section>
        
        </>
    )
}




export default Item;