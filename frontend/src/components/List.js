import React from 'react'
import {BiEditAlt} from 'react-icons/bi'
import {BsTrash} from 'react-icons/bs'
import axios from 'axios'
import { baseURL } from '../utils/constant'

const List = ({
    id,
    task,
    setUpdateUI,
    UpdateMode
}) => {
    const removeTask = ()=>
        {
          axios.delete(`${baseURL}/delete/${id}`).then((res)=>{
              console.log(res.data);
            //   setInput("")
              setUpdateUI((prevState)=> !prevState)
          }
      
          );
        }
      

  return (
    <li>
        {task}
        <div>
            <BiEditAlt onClick={()=>UpdateMode(id,task)}/>
            <BsTrash onClick={removeTask} />
        </div>
    </li>
  )
}

export default List