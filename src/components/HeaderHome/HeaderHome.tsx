import React, { ReactElement } from "react";

import { useTranslation } from 'react-i18next';

const NamHeaderHome: React.FC = (): ReactElement => {
    const {t} = useTranslation ();

    return (
        <div>
            <p>{t("title")}</p>
        </div>
    )    
}

export default NamHeaderHome
