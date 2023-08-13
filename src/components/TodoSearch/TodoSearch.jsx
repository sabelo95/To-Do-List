import "../../styles/TodoSearch.css"
import { useState } from "react";
const TodoSearch = ({setSearchValue,searchValue}) => {
    
 return (
    <input
      placeholder="Cortar mango"
      className="TodoSearch"
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value)
      }}
     />
    )
    

}

export default TodoSearch