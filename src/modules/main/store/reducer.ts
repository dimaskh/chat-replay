// Utils
import { combineReducers } from 'redux'

// Types
import { ReducersMapObject } from 'redux'

export interface IStoreState {
  // posts: IPostsStoreState
}

// type ReducerMaps = { [K in keyof IStoreState]: Reducer<any> }

const allReducers /* : ReducerMaps */ = {
  // posts: postsReducer,
}

export default combineReducers({ ...allReducers } as ReducersMapObject<
  IStoreState,
  any
>)
