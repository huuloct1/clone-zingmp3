import './App.css'
import { useState } from 'react'
import { Home, Login, Public } from './containers/public'
import { Routes, Route } from 'react-router-dom'
import path from './ultis/path'

// function App() {
//   return (
//     <div className='App'>
//       <Routes>
//         <Route path={path.PUBLIC} element={<Public />}>
//           <Route path={path.HOME} element={<Home />} />
//           <Route path={path.LOGIN} element={<Login />} />
//         </Route>
//       </Routes>
//     </div>
//   )
// }

function App() {
  return (
    <div className='App' style={{ display: 'flex', justifyContent: 'center' }}>
      <Notes />
    </div>
  )
}

function Notes() {
  const backendData = [
    {
      title: 'Grocery List',
      description: 'Milk, Soup, Bread',
      createdat: '01-18-2021',
    },
    {
      title: 'Math Homework',
      description: 'Remember to finish question 8-10 before monday',
      createdat: '12-01-2020',
    },
    {
      title: 'Call James',
      description: 'Ask him about the company party.',
      createdat: '12-30-2020',
    },
  ]

  const noteRootStyle = {
    border: '2px #0af solid',
    borderRadius: 9,
    margin: 20,
    backgroundColor: '#efefef',
    padding: 6,
  }

  return (
    <div style={{ width: 400 }}>
      {backendData.map((ele) => (
        <div style={noteRootStyle}>
          <h3>{ele.title}</h3>
          <p>{ele.description}</p>
          <small>{ele.createdat}</small>
        </div>
      ))}
    </div>
  )
}

export default App
