import { Routes, Route } from 'react-router-dom'
import Landing_page from './pages/Landing_page/Landing_page'
import { Login } from './pages/Auth/Login'
import  Chats  from './pages/Home/Chats'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing_page/>}/>
        <Route path="/chat" element={<Chats/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>    
    </div>
  )
}