import { createContext } from 'react'

export const state = {
  users: new Map<string, string>()
}

export const context = createContext(state)

export const Provider = context.Provider
