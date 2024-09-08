import React from 'react';
import {useTranslations} from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

interface HomePageProps {
    params: {
        locale: "en" | "ar";
        slug: string;
    };
}

export default function HomePage({params: {locale, slug}} : HomePageProps) {
   unstable_setRequestLocale(locale);

   const lang = useTranslations('newsPage');

    return (
      <>
          <main>
              News Slug :: {slug}
          </main>
      </>
    );
}
