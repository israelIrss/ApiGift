import React,{useState} from 'react'
import './index.css'
import { AddCategori } from "./components/AddCategori";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {
    //const categories=['Anime','Peliculas','Series']
    const [categories, setCategories] = useState(['boku no hero']);
    // const handleApp=()=>{
    //     setCategories([...categories,'HunterXhunter'])
        
    // }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategori setCategories={setCategories}/> 
            <hr/>
            
            <ol>
                {categories.map(category=>(
                    
                    <GifGrid category={category} key={category} />
                )
                )}
            </ol>
            
        </>
    )
}
