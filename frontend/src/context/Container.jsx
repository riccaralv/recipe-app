import { useEffect, useState } from "react"
import { MyContext } from "./Context.js";
import axios from "axios"
import toast ,{Toaster} from "react-hot-toast"
// import { axiosWithToken } from "../main.jsx";

export default function Container({children}) {
    const [recipes, setRecipes] = useState([]);
    const [user, setUser] = useState(null);
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() =>{
        if(localStorage.getItem("token")){
            axios.get("/users/refresh", {headers:{token: localStorage.getItem("token")}})
            .then(res=>{
              if(res.data.success){
                setUser(res.data.data) //asynchronous
                    axios.get(`/bookmarks/userbookmarks/${res.data.data._id}`,{headers:{token: localStorage.getItem("token")}})
                    .then(res=>{
                      console.log(res.data.data)
                      setBookmarks(res.data.data)})
              }else{
                toast.error(res.data.message)
              }
            })
          }
    }, [])

    return (
        <MyContext.Provider
        value={{
            recipes,
            setRecipes,
            user,
            setUser,
            bookmarks,
            setBookmarks
        }}>
            <Toaster position="top center"/>
      {children}
        </MyContext.Provider>
    );
}