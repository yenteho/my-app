import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import {FormattedMessage,IntlProvider} from 'react-intl';
import French from './lang/fr.json';
import Arabic from './lang/ar.json';
import English from './lang/en.json';

function App() {

  const [lang, setLang] = useState('en');
  const [language, setLanguage] = useState(undefined)

  useEffect(async () => {
    const resp = await fetch(`./lang/${lang}.json`)
    const data = await resp.json()
    setLanguage(data)
  }, [lang])

  return (<>
    <div className="flex">
    <select value={lang} onChange={evt => {
      setLang(evt.target.value);
    }}>
      <option value="en" >English</option>
      <option value="fr" >French</option>
      <option value="ar" >Arabic</option>
    </select>
  </div>
    <IntlProvider
    // locale ={locale} 
    messages={language}
  >
    <div className="App">
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
         <FormattedMessage
         id = "app.header"
         defaultMessage="Edit the files and save to reload"
       />
       </p>
       <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         <FormattedMessage
           id = "app.content"
           defaultMessage="Learn React"
         />
       </a>
       <FormattedMessage
         id = "app.channel.plug"
         defaultMessage="Tutorial brought to you by Lokalise"
       />
     </header>
   </div>
   </IntlProvider>
   </>
  );
}

export default App;
