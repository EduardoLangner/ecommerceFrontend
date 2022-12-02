import React from 'react'

import  './index.css'

const Search = () => {
    return (
        <div className="search">
            <div className="search-input">
                <div className="search-field">
                    <input type="text" placeholder="Pesquisar..." />
                </div>
                <div class="icon"> 
                    <i className="bi bi-search"></i>
                </div>
            </div>
        </div>
    )
}

export default Search