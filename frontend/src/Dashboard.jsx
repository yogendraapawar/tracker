import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TransactionForm from './components/TransactionForm'
import { Header } from './components/Header'



function Dashboard() {

  return (
    <div className='flex flex-col w-screen h-svh'>
      <Header/>
      <div className='flex-1 w-screen overflow-auto bg-red'>
        
      </div>
    </div>
  )
}

export default Dashboard
