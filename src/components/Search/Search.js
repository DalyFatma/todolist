import React from 'react'

const Search = ({setSearch}) => {  
  return (  
    <div>
        <input type='text' className='' onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Search