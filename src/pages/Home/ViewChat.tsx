import { Input } from "@/components/ui/input";
import { useParams } from "react-router-dom"
import Display from "./Display";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
export const ViewChat = () => {
  const user = useSelector((item:any) => item.user)
  const param = useParams();
  const [frd, setfrd] = useState<any>(param.user);
  const [mes, setmes] = useState([])
  useEffect(() => {
    (async() => {
        console.log("in asy");
        const res = await axios.post("http://192.168.202.238:5001/api/loadChat", {from:user.username, to:user.curFrd})
        console.log(res.data?.mes[0]);
        setmes(res.data?.mes[0])
    })()
  }, [user])
  return (
    <div className="flex flex-col w-[100%]">
        <div className="w-[100%] col-span-3 bg-red-500 py-4 px-2  h-fit">{param.user}</div>
        <Display mes={mes}/>
        <div className="w-[100%] h-[100%] bg-red-600">
            <div className="px-3 absolute bottom-3 w-[80%] flex gap-3">
                <Input className="w-[90%]"></Input>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" id="send"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path></svg>
            </div>
        </div>
    </div>
  )
}
