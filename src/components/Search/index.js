import React, { useState } from 'react'
import  './index.css'

const Search = () => {

    const [clear, setClear] = useState('inactive')


    return (
        <div className="search">
            <div className="search-input">
                <div className="search-field">
                    <input className="form" type="text" placeholder="Pesquisar..." onInput={()=>{setClear('active')}} onBlur={()=>{setClear('inactive')}}/>
                </div>
                <div className="clear">
                    <i className={`bi bi-x icon-${clear}`}></i>
                </div>
                <div className="icon"> 
                    <i className="bi bi-search icon-search"></i>
                </div>
            </div>
        </div>
    )
}

export default Search