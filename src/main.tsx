import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './less/app.less'
import './frame/request'

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)

// if (import.meta.env.DEV) {
//   import('vconsole').then(({ default: VConsole }) => new VConsole())
// }
