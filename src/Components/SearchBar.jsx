import React, { useContext, useState } from 'react'
import searchIcon from '../assets/Search.png'
import { ThemeContext } from '../context/ThemeContextProvider'

const SearchBar = ({getGithubUser}) => {
  const {theme} = useContext(ThemeContext)
  const [query,setQuery] = useState('')

  const handleSubmit = () => {
    if (!query){
      alert('Field is Required')
    }else {
      getGithubUser(query)
      setQuery('')
    }
  }
  return (
    <div className='p-2 bg-white dark:bg-[#1E2A47] flex justify-between items-center rounded shadow'>
        <div className='flex gap-2 ml-2'>
            <img src={searchIcon} alt="search icon" />
            <input value={query} onChange={(e)=>setQuery(e.target.value)} className='border-0 bg-transparent outline-none placeholder:text-gray-200'  type="text" placeholder='Search GitHub username…' />
        </div>
        <div>
            <span></span>
            <button onClick={handleSubmit} className='px-4 py-2 flex justify-center items-center text-white bg-primaryBlue rounded hover:bg-[#60ABFF] text-[13px] font-medium'>Search</button>
        </div>

    </div>
  )
}

export default SearchBar