import io from 'socket.io-client'
import React from 'react'

export const socket = io(`${location.hostname}:3030`, {
  autoConnect: false
})

export function useSocketConnection() {
  React.useEffect(() => {
    socket.connect()
    return () => {
      socket.disconnect()
    }
  }, [])
}
