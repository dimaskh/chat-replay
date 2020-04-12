// Types
import { Event } from 'models/events'
import { Selector } from 'reselect'
import { StoreState } from 'store/reducer'

export const events$: Selector<StoreState, Event[]> = (state: StoreState) => state.player.events
