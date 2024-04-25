import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { setFrd } from "@/store/Slice/userSlice";

const Profiles = ({username}:{username: String}) => {
  const Navi = useNavigate()
  const dispatch = useDispatch();

  return (
    
    <MenuItem className="mb-2" onClick={async() => {await dispatch(setFrd({username})); Navi(`/chat/${username}`)}}>
      <div className="flex justify-around">
      <Avatar className="">
      <AvatarImage className="rounded-[50%]" src="https://github.com/shadcn.png" />
      </Avatar>
      <div className="">
        {username}
      </div>
      </div>
      </MenuItem>
  )
}

const Sidebars = () => {
  const [friends, setFriends] = useState<any>();
  useEffect(() => {
    const fetchFrd = async () => {
      const res = await axios.get("http://192.168.202.238:5001/api/frds")
      console.log(res.data);
      setFriends(res.data)
    }
    fetchFrd()
  }, [])
  const prop = useSelector((item:any) => item.user)
  return (
<Sidebar className="h-screen">
  <Menu className="bg-black text-orange-600 ">
    <MenuItem className="bg-red-900 text-white">{prop?.username}</MenuItem>
      {friends?.map((item:any) => {
        return <Profiles username={item.username} />
      })}
  </Menu>
  </Sidebar>
  )
}

export default Sidebars