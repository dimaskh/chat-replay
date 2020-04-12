// Types
import { Event } from 'models/events'
import { Selector } from 'reselect'
import { StoreState } from 'store/reducer'

export const events$: Selector<StoreState, Event[]> = (state: StoreState) => state.player.events

export const isFinished$: Selector<StoreState, boolean> = (state: StoreState) => state.player.isFinished
export const isPlaying$: Selector<StoreState, boolean> = (state: StoreState) => state.player.isPlaying
