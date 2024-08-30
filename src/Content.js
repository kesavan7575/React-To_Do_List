import React from 'react'
import ItemsList from './ItemsList'


const Content = ({items,handelDelete,handleCheck}) => {
     
   return (
    <main>
    {(items.length)?(
         <ItemsList
           items={items}
           handelDelete={handelDelete}
           handleCheck={handleCheck}
         />
      ) : (
         <p>Your List Is Empty</p>
        )
    }
    </main>
    
  )
}
export default Content
