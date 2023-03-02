
// import axios from 'axios'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { fetchEmoji } from './emojiSlice'


export function Emoji(){
    const [nameList, setNameList] = useState([])
  const [search, setSearch] = useState("")

   const dispatch = useDispatch()

//   useEffect(() =>{
//     axios.get('https://emoji-api.com/emojis?access_key=1920e78d98935a320f2c863e0a910f8bd28c7301')
//     .then((response)=>{setNameList(response.data)})
//   },[])

  return (
    <div >
      <h1>Emoji Search</h1>
      <input type="text" placeholder='Search' onChange={()=>dispatch(fetchEmoji)}/>
      {nameList.filter((item)=>{
        if(search===""){
          return item
        }
        else if(item.unicodeName.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
          return item
        }
      })
      .map((item)=>{
        return <h4>{item.character}</h4>
        
      })}
    </div>

  )
}