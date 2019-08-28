export enum Events {
  UserList = 'user-list',
  UserConnected = 'user-connected',
  UserDisconnected = 'user-disconnected'
}

export interface EventMap {
  [Events.UserList]: string[]
  [Events.UserConnected]: string
  [Events.UserDisconnected]: string
}
