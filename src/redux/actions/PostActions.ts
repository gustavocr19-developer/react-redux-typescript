import { Post } from "../interfaces/Post";
import { GET_POSTS, PostActionTypes } from "../types/PostTypes";


export const getPostAction = (posts: Post[]): PostActionTypes => {
    return{
        type: GET_POSTS,
        payload: posts
    }
}