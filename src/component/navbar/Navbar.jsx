import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Style.css';

const Navbar = () => {
    const cart = useSelector(state => state.carts.cart)
    const quant = cart.length
    // console.log(cart)
    return (
        <header >
            <div className="container">
                <div className="header flex">
                    <nav className="flex">
                        <h1>
                            <Link className="navbar-brand" to="/">
                                <img src="./zlogo1.png" alt="logo" />
                            </Link>
                        </h1>
                        <div className="">
                            <ul className="flex">
                                <li className="nav-item">
                                    <Link className="nav-link hidemobile" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Products">All Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hidemobile" to="/Cart">Cart</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className='cartIcon'>
                        <Link to='/Cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <span className='cartQuant'>{quant}</span>
                        </Link>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Navbar