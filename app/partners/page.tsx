import React from 'react';
import Container from '../Components/Layout/Container';
import AnimatedSection from '@/Components/Animation/AnimatedSection';
import Partners from './Components/Partners';

interface HomePageProps {
    params: {};
}

export default function PartnersPage({params: {}} : HomePageProps) {

    return (
      <>
          <main>
          <Container className='min-h-[70vh]'>
            <AnimatedSection>
              <Partners locale='en'/>
            </AnimatedSection>
           </Container>
          </main>
      </>
    );
}
