import React from 'react'
import './index.css'
import HookRefeshToken from '../../hook/refeshToken'
import { useSelector, useDispatch } from 'react-redux'
import allAction from '../../redux/actions/index'
import { Redirect } from 'react-router-dom'
import { ICombineReducers } from '../../redux/reducers'

const App: React.FC = (): JSX.Element => {
  const stateRedux = useSelector((state: ICombineReducers) => state.testReducer)
  const dispatch = useDispatch()

  HookRefeshToken()

  const handleLogout = () => {
    dispatch(allAction.testAction.setLogout())
  }

  if (!stateRedux.isLogin) {
    return <Redirect to="/" />
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Home Page Welcome</p>
        <button type="button" onClick={() => handleLogout()}>
          logout
        </button>
      </header>
    </div>
  )
}

export default App
