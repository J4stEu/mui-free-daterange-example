import React from 'react';
import './assets/fonts/fonts.tsx';
import DateRange from './components/DateRange'
import dayjs from 'dayjs';
import frLocale from 'dayjs/locale/fr';
import ruLocale from 'dayjs/locale/ru';
import deLocale from 'dayjs/locale/de';
import arSaLocale from 'dayjs/locale/ar-sa';

const localeMap = {
  en: undefined,
  fr: frLocale,
  de: deLocale,
  ru: ruLocale,
  ar: arSaLocale,
};

function App() {
  const [locale] = React.useState<keyof typeof localeMap>('ru');
  // console.log(locale);
  return (
      <DateRange lc={localeMap[locale]}/>
  );
}

export default App;
