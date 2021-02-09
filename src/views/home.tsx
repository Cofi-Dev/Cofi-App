import React from 'react';
import { NavLink } from 'react-router-dom'
import { NamHeaderHome } from '../components/NavBarHome'

export const Home = () => {

    return (
        <section>
            <h1>Home</h1>
            <NamHeaderHome />
            <NavLink to="/about" activeClassName="selected">
              About
            </NavLink>
        </section>
    )
}
