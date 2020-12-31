import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { removePost } from './redux/actions/PostActions';
import { getPosts } from './redux/effects/Posts';
import { Post } from './redux/interfaces/Post';
import { AppState } from './redux/store';


const App = () => {
  
  const dispatch = useDispatch()
  const [ids,setIds] = useState(0)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])  

  const posts = useSelector((state:AppState) => state.posts)
  const removeItem = () =>{
    dispatch(removePost(ids))
    setIds(ids+1)
  }


  return (
   <>
    <button onClick={removeItem}>Remove </button>
    {posts.posts.map((post:Post)=> {
      return(
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
        )
    })}
   </>
  );
}

export default App
