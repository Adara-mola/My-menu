import React from 'react';
import ReactDom from 'react-dom/client';
import Navbar from './component/navbar/Navbar';
import Recipe from './component/recipe/Recipe'
import { useState } from 'react';
const Menu = () => {
    const [query, setQuery] = useState('')

    const handleQuery = (newQuery) => {
        setQuery(newQuery)
    }
    return (
        <section>
            
            <Navbar handleQuery = {handleQuery} query = {query}/>
            <Recipe query ={query}/>
        </section>
    )

}







const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<Menu />);
// const Greeting = () => {
//     return <h2> My First Component</h2>
// }
// export defualt Greeting
