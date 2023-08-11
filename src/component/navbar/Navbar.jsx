import React from 'react'
import './Navbar.css'
import {useState} from 'react'

function Navbar(props) {
  const [value, setValue] = useState('')
  
  return (
    <div className='NavContainer'>
        <div className='brandnameContainer'><h3 className='brandname'>Your Menu</h3></div>
        <form className='recipeForm' onSubmit={(e)=>{
          e.preventDefault()
          props.handleQuery(value)
        }}>
          <label className='navLabel'>
            <input type="text" className='recipeInput' value = {value} onChange={(e)=>{setValue(e.target.value)}} required/>
          </label>
          <button type='submit' className='recipeSubmit'>Submit</button>
        </form>
    

    </div>
  )
}

export default Navbar