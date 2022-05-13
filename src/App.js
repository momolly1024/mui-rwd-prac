import './App.css'

import ResponsiveAppBar from './components/ResponsiveAppBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
    return (
        <Router>
            <ResponsiveAppBar />
            <Routes>
                <Route element={<Home />} path={'/'}></Route>
                <Route element={<About />} path='/about'></Route>
                <Route
                    path='*'
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </Router>
    )
}

export default App
