import { useState } from 'react'
import useStorage from './components/useStorage'
import './App.css'

function App() {

  const {setStorage} = useStorage()
  return (
    <>
      <input type="text" placeholder='Enter your data' onChange={(e) => setStorage(e.target.value)}/>
    </>
  )
}

export default App
