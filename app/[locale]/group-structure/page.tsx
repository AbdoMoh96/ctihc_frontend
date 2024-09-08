import React from 'react';
import {useTranslations} from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

interface HomePageProps {
    params: {
        locale: "en" | "ar";
    };
}

export default function HomePage({params: {locale}} : HomePageProps) {
    unstable_setRequestLocale(locale);

    const lang = useTranslations('homePage');

    return (
      <>
          <main>
            <h1>Group Structure</h1>
          </main>
      </>
    );
}
