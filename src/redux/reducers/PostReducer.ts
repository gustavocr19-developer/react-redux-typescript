import { Post } from "../interfaces/Post";
import {GET_POSTS, 
        GetPostStateType, 
        PostActionTypes,
        REMOVE_POST
        } from "../types/PostTypes";


const initialStateGetPosts: GetPostStateType = {
    posts:[],
    postId: 0
}

export const getPostsReducer = (
    state = initialStateGetPosts,
    action: PostActionTypes
):GetPostStateType  =>{
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                postId: 0
        }
        case REMOVE_POST:
            const id = action.payload
            const valor = state.posts.filter((item:Post)=> item.id !== id)

            return{
                ...state,
                postId: action.payload,
                posts: valor
            }
        default:
            return state
    }
}



