import { Post } from "../interfaces/Post";
import { GET_POSTS, PostActionTypes, REMOVE_POST } from "../types/PostTypes";


export const getPostAction = (posts: Post[]): PostActionTypes => {
    return{
        type: GET_POSTS,
        payload: posts
    }
}

export const removePost = (id: number): PostActionTypes => {
    return{
        type: REMOVE_POST,
        payload: id
    }
}