import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Avatar, AvatarImage } from "@/components/ui/avatar"


const Sidebars = () => {
  return (
<Sidebar>
  <Menu className="bg-black text-orange-600">
    <MenuItem className="bg-red-900 text-white">My Account</MenuItem>
    <MenuItem>Ashwin</MenuItem>
    <MenuItem>Yugha</MenuItem>
    <MenuItem>Ranjith</MenuItem>
  </Menu>
  </Sidebar>
  )
}

export default Sidebars