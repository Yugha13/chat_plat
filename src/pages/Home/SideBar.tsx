import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

const Sidebars = () => {
  return (
<Sidebar className="">
  <Menu className="bg-black text-orange-600">
    <SubMenu label="Charts" className="hover:bg-black">
      <MenuItem > ashwin </MenuItem>
      <MenuItem> yugha </MenuItem>
    </SubMenu>
  </Menu>
  </Sidebar>
  )
}

export default Sidebars