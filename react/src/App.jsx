import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import TopDeclutters from "./pages/TopDeclutters";
import Layout from "./components/Layout";
import './styles/app.scss'


function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="topDeclutters" element={<TopDeclutters />} />
            </Route>
        </Routes>
        <footer>
            <p>Copyright &copy; 2020 The Golden Roast.</p>
        </footer>
    </BrowserRouter>
}

export default App;