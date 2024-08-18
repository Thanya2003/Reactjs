import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
function Myapp(){
  return(
    <h4>New function component</h4>
  )
}
// const Reactelem= {
//   type:'a',
//   props:{
//       href:'https://www.netflix.com',
//       target:'_blank'
//   },
//   childern:'click me '

// }
const anouse = "new constant inserted"
const realele = React.createElement(
  'a',
  {href:'https://www.netflix.com',target:'_blank'},
  'click me',
  anouse
)
const newele = (
  <a href="https://www.netflix.com">Netflix</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
 realele
)
