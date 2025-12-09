import ButtonCounter from './components/ButtonCounter';
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



function App() {
  return (
    <>
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
      <ParentInputNotifier />
    </>
  );
}

export default App;
