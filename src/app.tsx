import React from 'react'
import { css } from 'emotion'
import { Provider, state } from './context'

const App = () => (
  <Provider value={state}>
    <div
      className={css({
        position: 'absolute',
        minWidth: '100vw',
        minHeight: '100vh',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        fontSize: '64pt'
      })}
    >
      <div>Hello World</div>
    </div>
  </Provider>
)

export default App
