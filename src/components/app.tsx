import React from 'react'
import { css } from 'emotion'
import { Events } from '../../shared/events'
import { Dispatch } from '../dispatch'
import { State, defaultState, reducer } from '../state'
import { useSocket } from '../useSocket'
import { useSocketConnection } from '../io'

const wrapper = css({
  minWidth: '100vw',
  minHeight: '100vh',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: '3rem'
})

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, defaultState)

  useSocket(Events.UserList, payload => {
    dispatch({
      type: Events.UserList,
      payload
    })
  })

  useSocket(Events.UserConnected, payload => {
    dispatch({
      type: Events.UserConnected,
      payload
    })
  })

  useSocket(Events.UserDisconnected, payload => {
    dispatch({
      type: Events.UserDisconnected,
      payload
    })
  })

  useSocketConnection()

  return (
    <Dispatch.Provider value={dispatch}>
      <State.Provider value={state}>
        <div className={wrapper}>{JSON.stringify(state.users, null, 4)}</div>
      </State.Provider>
    </Dispatch.Provider>
  )
}
