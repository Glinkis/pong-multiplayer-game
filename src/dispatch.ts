import React from 'react'

const defaultDispatch: React.Dispatch<any> = () => {}

export const Dispatch = React.createContext(defaultDispatch)

export function useDispatch() {
  return React.useContext(Dispatch)
}
