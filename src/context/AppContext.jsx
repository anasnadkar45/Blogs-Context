import { createContext, useState } from "react";

export const AppContext = createContext();


export default function AppContextProvider({children}){
    // const[loading,setLoading] = (false)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const [posts, setPosts] = useState([])
    const url = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;

    const fetchData = async() => {
        const response =await fetch(url)
        const data = await response.json();
        setPosts(data.posts);
        setTotalPages(data.totalPages);
        console.log(data)
        console.log(data.totalPages)
    }

    const value = {
        page,
        setPage,
        // loading,
        // setLoading,
        posts,
        setPosts,
        setPage,
        totalPages,
        setTotalPages,
        fetchData
    }

    

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}