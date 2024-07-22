import React from 'react';
import Container from "@/app/[locale]/Components/Layout/Container";
import AnimatedSection from "@/Components/Animation/AnimatedSection";
import {useTranslations} from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

interface AboutPageProps {
    params: {
        locale: "en" | "ar";
    };
}

export default function AboutPage({params: {locale}} : AboutPageProps) {
    unstable_setRequestLocale(locale);

    const lang = useTranslations('aboutPage');

    return (
        <>
            <main>
                <AnimatedSection className="py-2 h-[70vh] mt-28" id='contact-section'>
                    {locale === 'en' &&
                    <Container className='gap-7 lg:gap-5'>
                    <h1 className='font-roboto font-bold text-black'>About Us</h1>
      <div className="">
        <h2>The Holding Company for Cotton, Spinning, Weaving, and Ready-made Garments</h2>
        <p>It is one of the companies affiliated with the Ministry of Public Business Sector, and it replaced the General Organization for Spinning and Weaving according to Law No. 203 of 1991 and its executive regulations. The company was established with the aim of providing the necessary investment for the Egyptian economy in the field of manufacturing and exporting cotton, spinning, weaving, and ready-made garments.</p>
    </div>

    <div className="">
        <h2>Company Capital:</h2>
        <ul>
            <li>15.534 billion EGP distributed over 15.534 million shares with a nominal value of 1000 EGP per share</li>
        </ul>
    </div>

    <div className="">
        <h2>Ownership Rights:</h2>
        <ul>
            <li>The company is wholly owned by the state, with some companies in which the holding company contributes.</li>
            <li>MISR Iran Spinning and Weaving Company with a contribution rate of (27%)</li>
            <li>Arab and United Bolivar Spinning and Weaving Company with a contribution rate of (16.2%)</li>
            <li>Al-Nasr Clothing and Textiles Company (Kabo) with a contribution rate of (7.66%)</li>
            <li>Egypt Cotton Hub (ECH) with a 99% holding contribution / 5% Mahalla / 5% Damietta</li>
        </ul>
    </div>

    <div className="">
        <h2>Shareholders</h2>
        <ul>
            <li>Two units with shareholders, which are Mit Ghamr unit affiliated with Shebin Company and Al-Ahlyah unit affiliated with MISR Kafr El-Dawar Company</li>
            <li>Two private sector shareholder companies, Dakahlia and Damietta, do not exceed 93%.</li>
        </ul>
    </div>
                </Container>
                    }

                    {locale === 'ar' && <Container className='gap-7 lg:gap-5'>
                        <h1 className='font-roboto font-bold text-black'>من نحن</h1>
                        <div className="">
            <h2>الشركة القابضة للقطن والغزل والنسيج والملابس الجاهزة</h2>
            <p className='text-wrap w-6/12'>هي إحدى الشركات التابعة لوزارة قطاع الأعمال، وقد حلت محل هيئة القطاع العام للغزل والنسيج بموجب القانون رقم 203 لسنة 1991 ولائحته التنفيذية وقد تأسست الشركة بهدف توفير الاستثمار اللازم للاقتصاد المصري في مجال تصنيع وتصدير القطن والغزل والنسيج والملابس الجاهزة.</p>
        </div>

        <div className="">
            <h2>رأس مال الشركة:</h2>
            <ul>
                <li>15.534 مليار جنية موزعة على 15.534 مليون سهم بقيمة اسمية للسهم 1000 جنية</li>
            </ul>
        </div>

        <div className="">
            <h2>حقوق الملكية:</h2>
            <ul>
                <li>الشركة مملوكة بالكامل للدولة هنالك بعض الشركات تساهم فيها الشركة القابضة.</li>
                <li>شركة مصر ايران للغزل والنسيج بنسبة مساهمة (27%)</li>
                <li>الشركة العربية والمتحدة بولفار للغزل والنسيج بنسبة مساهمة (16,2%)</li>
                <li>شركة النصر للملابس والمنسوجات (كابو) بنسبة مساهمة (7.66%)</li>
                <li>شركة ايجيبت كوتن هاب (ECH ) بنسبة 99% مساهمة القابضة / 5. % المحلة / 5. % دمياط</li>
            </ul>
        </div>

        <div className="">
            <h2>المساهمين</h2>
            <ul>
                <li>عدد 2 وحدة بها مساهمين وهي وحدة ميت غمر التابعة لشركة شبين ووحدة الاهلية التابعة لشركة مصر كفر الدوار</li>
                <li>عدد 2 شركة مساهمين قطاع خاص الدقهلية ودمياط لا يتعدى نسبة 93, %.</li>
            </ul>
        </div>
                    </Container>
                    }

                </AnimatedSection>


            </main>
        </>
    );
}
