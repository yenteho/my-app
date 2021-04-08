import logo from "./logo.svg";
import translate from "./GoogleTranslatelogo.svg.png";
import "./App.css";
import React, { useState, useEffect } from 'react'
import { FormattedMessage, IntlProvider, FormattedDate } from "react-intl";

function App() {
  const [lang, setLang] = useState('en')
  const [locale, setLocale] = useState(undefined)

  useEffect(async() => {
    const resp = await fetch(`./lang/${lang}.json`)
    const data = await resp.json()
    setLocale(data)
  },[lang])

  return (
    <IntlProvider 
      locale={locale}
      messages={locale}
    >
      <div className="App">
        <header className="App-header">
          <div className="flex-center">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="translate-wrapper"><img src={translate} className="translate" alt="translate" /></div>
          </div>
          <div>
            <select
              value={lang}
              onChange={(evt) => {
                setLang(evt.target.value);
              }}
            >
              <option value="en">English</option>
              <option value="cn">中文</option>
              <option value="fr">Français</option>
              <option value="jp">日本語</option>
            </select>
          </div>
          <p>
            <FormattedMessage
              id="app.header"
              defaultMessage="Edit src/App.js and save to reload."
            />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="app.content" defaultMessage="Learn React" />
          </a>
          <p>            
            <FormattedDate
              value={new Date()}
              year="numeric"
              month="long"
              day="numeric"
              weekday="long"
            />
          </p>
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
