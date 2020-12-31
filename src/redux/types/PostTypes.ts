import {Post} from '../interfaces/Post'

export const GET_POSTS = 'GET_POSTS'
export const REMOVE_POST = 'REMOVE_POST'

export interface GetPostStateType{
    posts: Post[],
    postId: number
}

interface RemovePostActionType{
    type: typeof REMOVE_POST
    payload: number
}

interface GetPostActionType{
    type: typeof GET_POSTS
    payload: Post[]
}

export type PostActionTypes = GetPostActionType | RemovePostActionType