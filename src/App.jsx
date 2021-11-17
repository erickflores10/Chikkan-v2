import React, { Component } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Posts from './pages/Posts';



//Pages
import Home from './pages/Home';
import Register from './pages/Register';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/register" element={<Register />} />
                    <Route path="/posts" element={<Posts />} />
                </Routes>
            </BrowserRouter>
        )
    }
}




export default App;