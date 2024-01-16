import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import '../index.css';

function BlogPosts() {
    const { fetchData, loading, posts, setPosts, page, totalPages, setPage } = useContext(AppContext)
    useEffect(() => {
        fetchData();
    }, [page])

    return (
        <div>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <p className='text-2xl font-bold text-yellow-500'>{post.title}</p>
                        <p>By <span>{post.author}</span>on <span>{post.category}</span></p>
                    </div>
                ))
            }

            <div>
                <div>
                    {
                        page > 1 && (
                            <button onClick={() => setPage(page - 1)}>previous</button>
                        )
                    }
                    {
                        page < totalPages && (
                            <button onClick={() => setPage(page + 1)}>next</button>
                        )
                    }

                </div>
                <div>
                    <p>page {page} of {totalPages}</p>
                </div>
            </div>

        </div>

    )
}

export default BlogPosts