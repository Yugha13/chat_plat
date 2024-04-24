import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRouter = () => {
  const user:any = useSelector((item:any) => item.user);

  if(user.isloggedIn){
    return (<Outlet/>)
  }
  return (
    <Navigate to={"/login"}/>
  )
}

export default PrivateRouter