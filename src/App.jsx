import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import CardItems from './Components/CardItems'
import axios from 'axios'



function App() {
  const [githubUser, setGithubUser] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getGithubUser = async (user) => {
    try {
      setLoading(true)
      const response = await axios.get(`https://api.github.com/users/${user}`,{
        headers:{
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
      }
      })

      const data = await response.data
      console.log(data)
      setLoading(false)
      setGithubUser(data)
      
    } catch (err) {
      console.log(err)
      setError('No results',err)
    }
    
  }




  return (
    <div className='w-100 h-screen bg-[#F6F8FF] dark:bg-black pt-20'>
      <div className='sm:w-[40%] md:[50%] w-60% m-auto pt-5 flex flex-col gap-5 overflow-hidden'>
        <Header/>
        <SearchBar getGithubUser={getGithubUser}/>
        <CardItems githubUser={githubUser}/>

      </div>

    </div>
  )
}

export default App
