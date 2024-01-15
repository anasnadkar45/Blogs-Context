import { createContext } from "react";

const AppContext = createContext();

function AppContextProvider({children}){
    const[loading,setLoading] = (false)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const [posts, setPosts] = useState([])

    const value = {
        page,
        setPage,
        loading,
        setLoading,
        posts,
        setPosts,
        setPage,
        totalPages,
        setTotalPages
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}