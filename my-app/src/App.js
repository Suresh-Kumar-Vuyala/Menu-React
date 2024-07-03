
import './App.css';
import {useState} from 'react';
import Item from './Item';
import data from './data';

function App() {

  const[people,setPeople]=useState(data);
  const changePeople=(type)=>{
    if(type==='all'){
      setPeople(data);
      return;
    }
            
     var newPeople=data.filter((ele)=>{
         return (ele.category===type);
     })
     setPeople(newPeople)

  }
  return (
    <>

      <section className="title">
        <div className='under-line'></div>
        <h1>Our Menu</h1>

      </section>
      <section className='Buttons'>
        <button onClick={()=>{changePeople('all')}} className='btn'>All</button>
        <button onClick={()=>{changePeople('breakfast')}} className='btn'>Breakfast</button>
        <button onClick={()=>{changePeople('lunch')}} className='btn'>Lunch</button>
        <button onClick={()=>{changePeople('shakes')}} className='btn'>Shake</button>

      </section>
      <section className='items'>

        {
          people.map((Data) => {
            return (
              <>
                <Item  key={Data.id} Data={Data}> </Item>
              </>
            )
          })
        }


      </section>
    </>
  );
}

export default App;
