import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Avatar, AvatarImage } from "@/components/ui/avatar"


const Sidebars = () => {
  return (
<Sidebar>
  <Menu className="bg-black text-orange-600">
    <SubMenu label="Charts" className="text-orange-600">
        <div className="text-orange-400">
            <div className="flex p-3 ">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                    <MenuItem> Ashwin </MenuItem>
            </div>
            <div className="flex p-3">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                    <MenuItem> Yugha </MenuItem>
            </div>
            <div className="flex p-3 ">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                    <MenuItem> Ranjith </MenuItem>
            </div>
            <div className="flex p-3 ">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                    <MenuItem> Arif </MenuItem>
            </div>
        </div>
    </SubMenu>
  </Menu>
  </Sidebar>
  )
}

export default Sidebars