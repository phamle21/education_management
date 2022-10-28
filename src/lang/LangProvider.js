import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { messages } from './messages/messages';

const LangProvider = ({ children }) => {
  const { currentLang } = useSelector((state) => state.lang);
  return (
    <IntlProvider locale={currentLang.locale} messages={messages[currentLang.locale]}>
      {children}
    </IntlProvider>
  );
};
export default LangProvider;
