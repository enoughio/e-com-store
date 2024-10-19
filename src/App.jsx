import { useState } from 'react'

import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './ccomponents/Home'
import Details from './ccomponents/Details'
import Create from './ccomponents/Create'
import Add from './ccomponents/Add'
import Edit from './ccomponents/Edit'
import Delete from './ccomponents/Delete'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='h-screen w-screen flex'>

      <Routes>
        <Route path='/' element={<Home />   } />
        <Route path='/cerate' element={<Create />   } />
        <Route path='/add' element={<Add />   } />
        <Route path='/edit' element={<Edit />   } />
        <Route path='/delete' element={<Delete />   } />
        <Route path='/details/:id' element={<Details />} />
      </Routes>

    </main>
  )
}

export default App
