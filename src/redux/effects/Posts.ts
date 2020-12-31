import { Dispatch } from "@reduxjs/toolkit"
import { getPostAction } from "../actions/PostActions"
import { PostActionTypes } from "../types/PostTypes"

export const getPosts = () => {
    return function (dispach: Dispatch<PostActionTypes>){
        const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
        
        fetch(POSTS_URL,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            dispach(getPostAction(data))
            return data
        })
    }
}