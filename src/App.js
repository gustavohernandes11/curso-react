
import './App.css';
import React, { useContext } from 'react'
import { changeTitle } from './contexts/GlobalContext/actions.js'
import { GlobalContextProvider } from './contexts/GlobalContext';
import { GlobalContext } from './contexts/GlobalContext/context.js'


const Title = () => {
  const context = useContext(GlobalContext);
  const { globalState, globalDispatch } = context;

  return (
    <h1 onClick={() => changeTitle(globalDispatch)}>{globalState.value}</h1>
  )
}

function App() {

  return (
    <GlobalContextProvider>
      <div className="App">
        <Title/>
      </div>
    </GlobalContextProvider>
  );
}

export default App;