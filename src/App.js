import React from 'react'
import Home from './components/Home/Home'
import Router from './Router'
import GlobalStyle from './globalStyles';


const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Router />
        </div>
    )
}

export default App