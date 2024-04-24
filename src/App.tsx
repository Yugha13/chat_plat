import { Routes, Route } from 'react-router-dom'
import Landing_page from './pages/Landing_page/Landing_page'
import { Login } from './pages/Auth/Login'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing_page/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>    
    </div>
  )
}