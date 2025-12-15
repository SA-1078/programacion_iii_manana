import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export default function LanguageToggle() {
    const { lang, toggleLanguage } = useContext(LanguageContext);

    return (
        <div>
            <p>Idioma actual: {lang === 'es' ? 'Español' : 'Inglés'}</p>
            <button onClick={toggleLanguage}>Cambiar idioma</button>
        </div>
    );
}