import React from 'react';
import ReactDOM from 'react-dom/client';
import MainView from './components/MainView';
import './css/index.css'

function R8App () {
    return (
        <div className='wrapper'>
            <MainView />
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R8App />)