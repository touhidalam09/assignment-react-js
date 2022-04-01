import React, { createContext, useState } from "react";
import { IntlProvider } from "react-intl";
import English from "../lang/en.json";
import Bengali from "../lang/bn.json";

export const LangContext = createContext();

const local = navigator.language;
let lang;
if (local === "en-US") {
  lang = English;
} else {
  lang = Bengali;
}

const WrapperLang = ({ children }) => {
  const [locale, setLocale] = useState(local);
  const [message, setMessage] = useState(lang);

  function selectLang(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "en-US") {
      setMessage(English);
    } else {
      setMessage(Bengali);
    }
  }
  return (
    <LangContext.Provider value={{ locale, selectLang }}>
      <IntlProvider locale={locale} messages={message}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
};

export default WrapperLang;
