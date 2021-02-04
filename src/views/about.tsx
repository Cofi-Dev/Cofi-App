import React from 'react';
import { NavLink } from 'react-router-dom'

export const About = () => {

    return (
        <section>
            <h1>About</h1>
            <NavLink to="/" activeClassName="selected">
              Home
            </NavLink>
        </section>
    )
}
