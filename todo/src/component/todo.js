import React, { useState } from 'react'
import todo from "../images/todo.jpg"
import trash from "../images/trash.png"
import add from "../images/add.png"
import "../App.css";

const Todo = () => {
    const[inputData , setInputData]=useState('');
    const[items , setItems] = useState([]);
    const addItems=()=>{
        if (!inputData){

        }
        else{
            setItems([...items,inputData]);
            setInputData('');
        }
      
    }
    const deleteItem = (id) =>{
       console.log(id);
       const updateditems = items.filter((elem ,ind)=>{
        return id != id;
       });
       setItems(updateditems);
    }
    const removeAll = () =>{
        setItems([]);
    }
    return(
          <>
          <div className='main-div'>
          <div className='child-div'>
              <figure>
                  <img src={todo} alt='todo-logo' height='200px' width='200px'/>
                  <figcaption>Enter your Todo List Here </figcaption>
              </figure>
              <div className='addItems'>
              <input type='text' placeholder='Enter Here' 
              value={inputData}
              onChange={(e)=> setInputData(e.target.value)}
              />
              <img className='addimg' src={add} onClick={addItems}></img>
              </div>
              
              <div className='showItems'>
                  {
                      items.map((elem, ind)=>{
                          return(
                            <div className='eachItem' key={ind}>
                            <h3>{elem}</h3>
                          <img className='deleteimg' src={trash} onClick={deleteItem}></img>
                          
                             </div>
                          )

                      })
                  }
             

              </div>
              <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span> </button>
                    </div>
          </div> 
          </div>
          </>
    )
}
export default Todo