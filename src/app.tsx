import React from 'react'
import { css } from 'emotion'
import { Provider, state } from './context'

const wrapper = css({
  minWidth: '100vw',
  minHeight: '100vh',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: '64pt'
})

export default function App() {
  return (
    <Provider value={state}>
      <div className={wrapper}>Hello World</div>
    </Provider>
  )
}
