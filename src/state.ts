import React from 'react'

interface State {
  users: Map<string, string>
}

export const defaultState = {
  users: new Map()
}

export function reducer(state: State, action: any) {
  console.log(state, action)
  return state
}

export const State = React.createContext(defaultState)

export function useState() {
  return React.useContext(State)
}
