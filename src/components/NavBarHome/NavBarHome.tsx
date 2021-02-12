import React, { ReactElement } from "react";
import { useTranslation } from 'react-i18next';
import './NavBarHome.scss'
import { NavLink } from 'react-router-dom'

const NamHeaderHome: React.FC = (): ReactElement => {
    const {t} = useTranslation ();

    return (
        <nav className="nam-navbar">
            <div className="nam-navbar__inner">
                <div className="nam-navbar__icon">
                    <p>{t("home.title")}</p>
                </div>
                <div className="nam-navbar__links">
                     <NavLink to="/" activeClassName="selected">Home</NavLink>
                     <NavLink to="/about" activeClassName="selected">About</NavLink>
                </div>
            </div>
        </nav>
    )    
}

export default NamHeaderHome
