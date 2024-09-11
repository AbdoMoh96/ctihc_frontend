import React from 'react';
import Container from '../Components/Layout/Container';
import AnimatedSection from '@/Components/Animation/AnimatedSection';
import Partners from './Components/Partners';
import {useTranslations} from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

interface HomePageProps {
    params: {
        locale: "en" | "ar";
    };
}

export default function PartnersPage({params: {locale}} : HomePageProps) {
    unstable_setRequestLocale(locale);

    const lang = useTranslations('partnersPage');

    return (
      <>
          <main>
          <Container className='min-h-[70vh]'>
            <AnimatedSection>
              <Partners locale={locale}/>
            </AnimatedSection>
           </Container>
          </main>
      </>
    );
}
