import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import '../../styles/header.css'
import { useState } from 'react';

const nav__links = [
    {
        display: 'Home',
        path: '/home'
    },
    {
        display: 'Shop',
        path: '/shop'
    },
    {
        display: 'Contact',
        path: '/contact'
    },
    {
        display: 'Cart',
        path: '/cart'
    },

]

const Header = () => {
    const [active, setActive] = useState("navigation");
    const navToggle = () => {
        active === "navigation" ? setActive("navigation active-navigation") : setActive("navigation");
    }

    return (
        <header className='header'>
            {/* CONTAINER */}
            <div className="container-ld">
                {/* HEADER TOP */}
                <div className='header__top'>
                    <div className='header__top-context'>
                        <i class="ri-arrow-right-s-line"></i>
                        <span>
                            Subscribe to the Ladire to receive timely updates from your favorite products.
                        </span>
                    </div>
                    <div className="header__top-icon">
                        <div className='contacts-icon'>
                            <i class="ri-contacts-line"></i>
                            <span>Contact</span>
                        </div>
                        <div className='question-icon'>
                            <i class="ri-question-line"></i>
                            <span>Help</span>
                        </div>
                        <div className='wallet-icon'>
                            <i class="ri-wallet-line"></i>
                            <span>Wallet</span>
                        </div>
                    </div>
                </div>
                {/* HEADER MIDDLE (MENU)*/}
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className='nav__left d-flex align-items-center'>
                        {/* LOGO */}
                        <div className="logo">
                            <span className='logo-wrapper'><span>La</span>dire</span>
                        </div>
                        <div className='nav__wrapper-search'>
                            <div className='search__wrapper'>
                                <input type="text" />
                                <i class="ri-search-line"></i>
                            </div>
                        </div>
                    </div>
                    { /* NAV RIGHT ICON */}
                    <div className="nav__right d-flex align-items-center gap-2">
                        <span className="nav__right-icon basket">
                            <i class="ri-shopping-bag-3-line"></i>
                            <span className="cart__badge">5</span>
                            <span>Basket</span>
                        </span>
                        <span className='nav__right-icon fav'>
                            <i class="ri-heart-line"></i>
                            <i class="ri-heart-fill fav-fill"></i>
                            <span>Favorites</span>
                        </span>
                        <div className='nav__right-icon phone'>
                            <i class="ri-phone-line"></i>
                            <span>0(216) 123-456</span>
                        </div>
                        {/* LOGIN/REGISTER */}
                        <span className="nav__right-icon user">
                            <Link className='link__style' to='/login'>
                                <i class="ri-user-shared-line"></i>
                            </Link>
                            <span>Login / Register</span>
                        </span>
                        {/* MOBILE HAMBURGER MENU */}
                        <span className='mobile__menu' onClick={navToggle}>
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
                {/* HEADER BOTTOM */}
                <div className='header__bottom'>
                    <div className={active}>
                        {/* MENU */}
                        <div className="menu d-flex align-items-center gap-4">
                            {
                                nav__links.map((item, index) => (
                                    <NavLink
                                        onClick={navToggle}
                                        className={(navClass) => navClass.isActive ? 'active__menu' : ""}
                                        to={item.path}
                                        key={index}
                                    >
                                        {item.display}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                    {/* HEADER BOTTOM RIGHT DIV */}
                    <div className='header__bottom__spacial'>
                        <div className='special__div search'>
                            <i class="ri-search-line"></i>
                        </div>
                        <div className='special__div special'>
                            <i class="ri-medal-2-fill"></i>
                            <span>Special Offers</span>
                        </div>

                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header