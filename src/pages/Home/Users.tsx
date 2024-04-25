import { Outlet } from "react-router-dom"
import Sidebars from "./SideBar"
const Users = () => {
  return (
    <div className="flex">
      <div className="">
        <Sidebars/>
      </div>
      <Outlet/>
    </div>
  )
}

export default Users