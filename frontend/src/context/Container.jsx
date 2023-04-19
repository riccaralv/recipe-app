import { useEffect, useState } from "react"
import { MyContext } from "./Context/js";
import axios from "axios"

export default function Container({children}) {
    const [recipes, setRecipes] = useState([]);
    const [user, setUser] = useState(null);
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() =>{
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