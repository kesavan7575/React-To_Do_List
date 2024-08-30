import React from 'react'
// import lineItems from './lineItems';
import {FaTrashAlt} from "react-icons/fa";



const ItemsList = ({items,handelDelete,handleCheck}) => {
  return (
    <ul>
      {items.map((item) => (
        <li className='item'>
        <input
           type = "checkbox"
           onChange={()=>handleCheck(item.id)}
           checked = {item.checked}
        />
        <label 
           style={(item.checked)?{textDecoration:'line-through'}:null}
           onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label> 
        <FaTrashAlt 
          role='button'
          onClick={() => handelDelete(item.id)}
          tabIndex="0"
        /> 
      </li>
    ))}
   </ul>
  )
}

export default ItemsList