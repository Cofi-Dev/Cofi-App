import React, { ReactElement } from "react";
import { useTranslation } from 'react-i18next';
import './NavBarHome.scss'

const NamHeaderHome: React.FC = (): ReactElement => {
    const {t} = useTranslation ();

    return (
        <nav className="nam-nav-bar">
            <div className="nam-nav-bar__inner">
                 <p>{t("title")}</p>
            </div>
        </nav>
    )    
}

export default NamHeaderHome
