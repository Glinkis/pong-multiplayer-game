export enum Events {
  UserConnected = 'user-connected',
  UserDisconnected = 'user-disconnected'
}

export interface EventMap {
  [Events.UserConnected]: {
    id: number
    name: string
  }
  [Events.UserDisconnected]: number
}
