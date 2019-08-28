import { useEffect } from 'react'
import { Events, EventMap } from '../shared/events'
import { socket } from './io'

export function useSocket<T extends Events>(
  event: T,
  callback: (value: EventMap[T]) => void
) {
  useEffect(() => {
    socket.on(event, callback)
    return () => {
      socket.off(event, callback)
    }
  }, [event, callback])
}
