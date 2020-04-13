export const messageEvent = {
  delta: 1000,
  payload: {
    type: 'message',
    user: { id: 1, user_name: 'taco', display_name: 'Taco Spolsky' },
    message: { id: 1, text: 'Hello!' },
  },
}

export const updateEvent = {
  delta: 2000,
  payload: {
    type: 'update',
    message: { id: 1, text: "Seems like it's working find … for *edits* also" },
    user: { id: 1, user_name: 'taco', display_name: 'Taco Spolsky' },
  },
}

export const deleteEvent = { delta: 3000, payload: { type: 'delete', message: { id: 1 } } }

export const connectEvent = {
  delta: 4000,
  payload: { type: 'connect', user: { id: 3, user_name: 'pete', display_name: 'Pete the Computer' } },
}

export const disconnectEvent = {
  delta: 5000,
  payload: { type: 'disconnect', user: { id: 1, user_name: 'taco', display_name: 'Taco Spolsky' } },
}

export const events = [messageEvent, updateEvent, deleteEvent, connectEvent, disconnectEvent]
