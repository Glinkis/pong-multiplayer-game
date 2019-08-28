import io from 'socket.io-client'

export const socket = io(`${location.hostname}:3030`)
