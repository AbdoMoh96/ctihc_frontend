import React from 'react';
import {useTranslations} from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

interface HomePageProps {
    params: {
        locale: "en" | "ar";
    };
}

export default function NewsPage({params: {locale}} : HomePageProps) {
    unstable_setRequestLocale(locale);

    const lang = useTranslations('newsPage');

    return (
      <>
          <main>
              <h1>News</h1>
          </main>
      </>
    );
}
