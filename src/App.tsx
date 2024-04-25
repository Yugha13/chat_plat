import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Landing_page from './pages/Landing_page/Landing_page';
import { Login } from './pages/Auth/Login';
import Chats from './pages/Home/Chats';
import PrivateRouter from './PrivateRouter';
import { ViewChat } from './pages/Home/ViewChat';

export default function App() {
  const user = useSelector((item:any) => (item.user));
  console.log(user)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="/login" element={<Login />} />
        <Route path='' element={<PrivateRouter/>}>
          <Route path='/chat' element={<Chats/>}>
            <Route path=':user' element={<ViewChat/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}