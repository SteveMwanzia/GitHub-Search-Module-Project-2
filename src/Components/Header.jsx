import React, { useContext } from 'react'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import { ThemeContext } from '../context/ThemeContextProvider'

const Header = () => {

    const{theme,themeToggler} = useContext(ThemeContext)

  return (
    <div className='w-full flex justify-between items-center'>
        <h1 className='text-primaryBlack font-spaceMono font-bold text-[22px] dark:text-white'>devfinder</h1>
        <div className='flex items-center justify-center gap-2'>
            <h4 className='font-spaceMono text-gray-100 text-[13px] uppercase font-bold dark:text-white'>
                {theme === 'light'?'dark':'light'}
            </h4>
            <span className=' cursor-pointer' onClick={themeToggler}>
                {
                    theme === 'light' ? <img src={moon} alt="moon icon" /> : <img src={sun} alt="sun icon" />
                }
                
            </span>
        </div>
    </div>
  )
}

export default Header