import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
// import { div } from 'framer-motion/client'

function MyApp(){
  return (
    <div>
      <h1>Custum App</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const newElement = (
  <a href="https://google.com" target ='_blanck'>Vist google</a>
)

const reactElement = React.createElement(
    'a',
    {
      href: 'https://google.com',target: '_blank'
    },
    'click  to visit google'
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <App/>
)
