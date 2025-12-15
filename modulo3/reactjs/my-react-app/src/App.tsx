{/*import ButtonCounter from './components/ButtonCounter';
import ColorBox from './components/ColorBox';
import HelloWorld from './components/HelloWorld';
import ShowDate from './components/ShowDate';
import TextInput from './components/TextInput';
import ToggleMessage from './components/ToggleMessage';
import WelcomeUser from './components/WelcomeUser';
import ConditionalText from './components/ConditionalText';
import EmojiList from './components/EmojiList';
import SimpleForm from './components/SimpleForm';
import SumaForm from './components/SumaForm';


import Greeting from "./props/Greeting";
import PromedioTresNotasForm from './components/PromedioTresNotasForm';
import UserCard from './props/UserCard';
import ParentButtonOne from './props/ParentButtonOne';
import ParentInputNotifier from './props/ParentInputNotifier';


import HoverFont from './useState/Hoverfont';
import AccessWithLimit from './useState/AccessWithLimit';
import LoginWithLimit from './useState/LoginWithLimit';
import DocumentTitleChanger from './useState/DocumentTitleChanger';
import PostLikes from './useState/PostLikes';
import CheckboxSummary from './useState/CheckboxSummary';
import LanguageSwitcher from './useState/LanguageSwitcher';
import MultiSwitch from './useState/MultiSwitch';
import DynamicColor from './useState/DynamicColor';
import ClickHistory from './useState/ClickHistory';
import LogEffect from './useEffect/LogEffect';
import FetchUser from './useEffect/FetchUser';
import Clock from './useEffect/Clock';
import FetchUsers from './useEffect/FetchUsers';
import ScrollLogger from './useEffect/ScrollLogger';
import PersistCounter from './useEffect/PersistCounter';



function App() {
  return (
    <>{/*
      <HelloWorld />
      <WelcomeUser />
      <ButtonCounter />
      <ShowDate />
      <TextInput />
      <ToggleMessage />
      <ColorBox />
      <ConditionalText />
      <EmojiList />
      <SimpleForm />
      <SumaForm />

      <Greeting name="Santiago" />
      <Greeting name="Maria" />
      <PromedioTresNotasForm />
      <UserCard user={userData} />
      <ParentButtonOne />
      {/* <ParentInputNotifier /> 

      <HoverFont/>
      <AccessWithLimit/>
      <LoginWithLimit/>
      <DocumentTitleChanger/>
      <PostLikes/>
      <CheckboxSummary/>
      <LanguageSwitcher/>
      <MultiSwitch/>
      <DynamicColor/>
      <ClickHistory/>
      <LogEffect/>
      <FetchUser/>
      <Clock/>
      <FetchUsers/>
      <ScrollLogger/>
      <PersistCounter/>

    </>
  );
}

export default App;
*/}

{/*
// useContext, languajeContext, LanguageToggle

import React, { useState } from 'react';
import { LanguageContext } from './useContext/LanguageContext';
import LanguageToggle from './useContext/LanguageToggle';

export default function App() {
  const [lang, setLang] = useState('es');
  const toggleLanguage = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <LanguageToggle />
    </LanguageContext.Provider>
  );
}
*/}


import React, { useState } from 'react';
import { LoginContext } from './useContext/LoginContext';
import LoginStatus from './useContext/LoginStatus';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => setIsLoggedIn(prev => !prev);

  return (
    <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
      <LoginStatus />
    </LoginContext.Provider>
  );
}