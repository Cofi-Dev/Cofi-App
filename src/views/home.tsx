import React from 'react';
import { NavLink } from 'react-router-dom'

export const Home = () => {

    return (
        <section>
            <h1>Home</h1>
            <NavLink to="/about" activeClassName="selected">
              About
            </NavLink>
        </section>
    )
}