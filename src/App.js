import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './components/pages/MainPage';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import OurPage from './components/pages/OurPage';
import ListPage from './components/pages/ListPage';
import CartModal from './components/cart/CartModal';
import CartPage from './components/pages/CartPage';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <CartModal />
                <main>
                    <div className="grid_container">
                        <Routes>
                            <Route
                                exact
                                path="/"
                                element={<MainPage />}
                            />

                            <Route
                                path="/about"
                                element={<OurPage />}
                            />
                            <Route
                                path="/items"
                                element={<ListPage />}
                            />
                            <Route
                                path="/item"
                                element={<CartPage />}
                            />
                        </Routes>
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
