// Types
import { User } from 'models/users/types'
import { Selector } from 'reselect'
import { StoreState } from 'store/reducer'

export const users$: Selector<StoreState, User[]> = (state: StoreState) => state.users.data
