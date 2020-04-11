// Utils
import { combineReducers } from 'redux'

// Types
import { ReducersMapObject } from 'redux'

// Reducers
// import playerReducer from 'modules/player/reducer'

export interface IStoreState {
  // posts: IPostsStoreState
}

// type ReducerMaps = { [K in keyof IStoreState]: Reducer<any> }

const allReducers /* : ReducerMaps */ = {
  // posts: postsReducer,
}

export default combineReducers({ ...allReducers } as ReducersMapObject<IStoreState, any>)
