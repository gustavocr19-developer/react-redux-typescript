import {GET_POSTS, 
        GetPostStateType, 
        PostActionTypes
        } from "../types/PostTypes";


const initialStateGetPosts: GetPostStateType = {
    posts:[]
}

export const getPostsReducer = (
    state = initialStateGetPosts,
    action: PostActionTypes
):GetPostStateType  =>{
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
        }
        default:
            return state
    }
}
