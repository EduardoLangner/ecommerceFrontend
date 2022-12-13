import React from 'react'
import { useState } from 'react'
import  './index.css'

const Search = () => {

    return (
        <div className="search">
            <div className="search-input">
                <div className="search-field">
                    <input className="form" type="text" placeholder="Pesquisar..." />
                </div>
                <div className="icon"> 
                    <i className="bi bi-search icon-search"></i>
                </div>
            </div>
        </div>
    )
}

export default Search