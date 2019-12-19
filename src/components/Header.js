import React from 'react';
import { Link } from 'react-router-dom'
import { ROUTES_PATH } from '../constants';
import logo from '../assets/images/logo.svg'; 

export default function Header() {
    return (
        <div className='header'>
            <div className='logo'><img src={logo} alt="logo"/> </div>
            <Link to={ROUTES_PATH.SERVICE}>SERVICES</Link>
            <Link to={ROUTES_PATH.INDUSTRIES}>INDUSTRIES</Link>
            <Link to={ROUTES_PATH.SOLUTIONS}>SOLUTIONS</Link>
            <Link to={ROUTES_PATH.TECHNOLOGIES}>TECHNOLOGIES</Link>
            <Link to={ROUTES_PATH.SUCCESS}>SUCCESS STORIES</Link>
            <Link to={ROUTES_PATH.INSIGHTS}>INSIGHTS</Link>
            <Link to={ROUTES_PATH.CAREER}>CAREER</Link>
            <Link to={ROUTES_PATH.CONTACT}>CONTACT US</Link>
        </div>
    )
}
