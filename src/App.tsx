import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getPosts } from './redux/effects/Posts';
import { Post } from './redux/interfaces/Post';
import { AppState } from './redux/store';


const App = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])  

  const posts = useSelector((state:AppState) => state.posts)

  return (
   <>
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
