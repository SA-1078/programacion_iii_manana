
import { useState } from 'react';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('es');
  const messages:any = {
    es: 'Hola mundo',
    en: 'Hello world',
    fr: 'Bonjour le monde',
    ch: '你好世界 Nǐ hǎo shìjiè',
    it: 'Ciao mondo'
  };

  return (
    <div>
      <select onChange={(e) => setLang(e.target.value)} value={lang}>
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="fr">Francés</option>
        <option value="ch">Chino</option>
        <option value="it">Italiano</option>
      </select>
      <p>{messages[lang]}</p>
    </div>
  );
}
