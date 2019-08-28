import React from 'react'
import { Events, EventMap } from '../shared/events'

interface State {
  users: Record<string, boolean>
}

export const defaultState = {
  users: {}
}

interface Action {
  type: string
  payload: any
}

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case Events.UserConnected:
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload]: true
        }
      }
    case Events.UserDisconnected:
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload]: false
        }
      }
  }
  return state
}

export const State = React.createContext(defaultState)

export function useState() {
  return React.useContext(State)
}
