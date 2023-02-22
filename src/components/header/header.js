import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toogleCartActive } from '../cart/cartSlice';
import './header.scss';

const Header = () => {
    const disatch = useDispatch();

    const toogleCart = () => {
        disatch(toogleCartActive());
    };

    return (
        <header className="header__container">
            <div className="header__link">
                <ul className="list">
                    {/* <li className="link_tem">Coffee house</li> */}
                    <li className="link__tem">
                        <Link to="/">Home page</Link>
                    </li>

                    <li className="link__tem">
                        <Link to="/items">Coffee house</Link>
                    </li>
                    <li className="link__tem">
                        <Link to="/about">About us</Link>
                    </li>
                </ul>
            </div>

            <div className="header__logo">
                <button
                    className="btn btn__modal__cart btn__light"
                    onClick={toogleCart}
                >
                    Cart
                </button>
                <img className='logo'
                    src="https://t.ly/VJQ1"
                    alt="logo"
                />
            </div>
        </header>
    );
};

export default Header;
