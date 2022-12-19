import React, { useState } from 'react'
import  './index.css'

const Search = () => {

    const [clear, setClear] = useState('inactive')
    const [form, setForm] = useState('')

    return (
        <div className='search'>
            <div className='search-input'>
                <div className='search-field'>
                    <input className='form' type='text' placeholder='Pesquisar...' 
                        onInput={()=>{setClear('active')}} 
                        onBlur={()=>{setClear('inactive')}} 
                        value={form} 
                        onChange={(e) => setForm(e.target.value)}/>
                </div>
                <div className='clear'>
                    <i className={`bi bi-x icon-${clear}`} onClick={()=>{setForm('')}}></i>
                </div>
                <div className='icon'> 
                    <i className='bi bi-search icon-search'></i>
                </div>
            </div>
        </div>
    )
}

export default Search