import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header.jsx'
import Cart from './pages/Cart.jsx'
import Photos from './pages/Photos.jsx'

export default function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Photos />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </div>
  )
}
