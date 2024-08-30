import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import AddItem from "./AddItem";
import { useState } from 'react';
import SearchItem1 from "./SearchItem1";



function App(){
    const[items,setItems] = useState(JSON.parse(localStorage.getItem('todo_list'))
        
          // { id:1,
          //   checked:true,
          //   item:"Practice Coding"
          // },
          // { id:2,
          //   checked:false,
          //   item:"Play Cricket"
          // },
          // { id:3,
          //   checked:false,
          //   item:"Read About AI"
          // },
          // { id:4,
          //   checked:true,
          //   item:"Read About AI"
          // },
        );
     const [newItem,setNewItem]=useState('')   
     const[search,setSearch]=useState('')

     const addItem=(item)=>{
      const id = items.length ? items[items.length -1].id+1:1;
      const addNewItem ={id,checked:false,item}
      const listItems =[...items,addNewItem]
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems))
     }
  
        const handleCheck =(id) =>{
             const listItems = items.map((item) =>
              item.id===id ?{...item,checked:!item.checked}:
             item)
             setItems(listItems)
             localStorage.setItem("todo_list",JSON.stringify(listItems))
        }
        const handelDelete =(id) =>{
            const listItems =items.filter((item) =>
            item.id!==id)
            setItems(listItems)
            localStorage.setItem("todo_list",JSON.stringify(listItems))
        }
        const handleSubmit=(e)=>{
          e.preventDefault()
          if (!newItem) return
          console.log(newItem)
          addItem(newItem)
          setNewItem('')
        }
    return(
        <div className="Center">
           <Header/>
           <AddItem
             newItem={newItem}
             handleSubmit={handleSubmit}
             setNewItem={setNewItem}
           />
            <SearchItem1
            search={search}
            setSearch={setSearch}
            />
           <Content 
              items={items.filter(item =>((item.item).
              toLowerCase()).includes(search.toLowerCase()))}
              handelDelete={handelDelete}
              handleCheck={handleCheck}
           /> 
           <Footer 
            length ={items.length}
           />
        </div>
    )
}
export default App;