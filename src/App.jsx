import { useState } from 'react'
import './App.css'
import { Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layout/Layout'
import Admin from './pages/Admin'
import Edit from './pages/Edit'
import Add from './pages/Add'
import Favorit from './pages/Favorit'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/add' element={<Add />} />
        <Route path='/favorit' element={<Favorit />} />
      </Route>
    </Routes>

    </>
  )
}

export default App
