import { useSelector } from "react-redux"

const Display = ({mes}: {mes:any}) => {
  const data = useSelector((item:any) => item.user)
  return (
    <div className="bg-red-600 h-[100%] p-5 text-lg">{mes?.map((item:any) => {
        return  <h1 className={`${item.sendBy == data.username?"text-right":"text-left"}`}>{item.message}</h1>
    })}</div>
  )
}

export default Display