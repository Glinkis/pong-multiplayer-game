import React from 'react'

const defaultDispatch: React.Dispatch<any> = () => {}

export const Dispatch = React.createContext(defaultDispatch)
