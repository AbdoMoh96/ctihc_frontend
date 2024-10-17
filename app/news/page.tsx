import React from 'react';
import Container from '../Components/Layout/Container';
import AnimatedSection from '@/Components/Animation/AnimatedSection';
import News from './Components/News';

interface HomePageProps {
    params: {
        locale: "en" | "ar";
    };
}

export default function NewsPage({params: {locale}} : HomePageProps) {

    return (
      <>
          <main>
          <Container className='min-h-[70vh]'>
            <AnimatedSection>
              <News locale={locale}/>
            </AnimatedSection>
           </Container>
          </main>
      </>
    );
}
