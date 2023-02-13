import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './components/router';

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </>
        </div>
    )
}

export default App
