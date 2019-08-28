import React from 'react'
import { css } from 'emotion'
import { Dispatch } from '../dispatch'
import { State, defaultState, reducer } from '../state'

const wrapper = css({
  minWidth: '100vw',
  minHeight: '100vh',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: '64pt'
})

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, defaultState)

  return (
    <Dispatch.Provider value={dispatch}>
      <State.Provider value={state}>
        <div className={wrapper}>Hello World</div>
      </State.Provider>
    </Dispatch.Provider>
  )
}
