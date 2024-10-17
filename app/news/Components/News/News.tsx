'use client'
import React, {useEffect, useState} from 'react';
import config from '@/helpers/config.helper';
import Link from 'next/link';

interface propTypes {
    locale: 'en'|'ar';
}

async function getData(locale: 'en' | 'ar', page: number){
    const response = await fetch(`${config.AppUrl}/client/news/getAllNews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale,
        },
        body: JSON.stringify({
            "limit" : null,
            "page" : page,
            "order" : null,
            "filter" : null
        }),
        next:{ revalidate: config.Revalidate }
    });

    return response.json();
}

const News: React.FC<propTypes> = ({locale}) => {

  const [news, setNews] = useState<Array<object>>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
     getData(locale, page).then((response: {data: Array<object>, to: number, total: number}) => {
        setNews([ ...news, ...response.data]);
        if(response.to === response.total){
           setIsButtonDisabled(true);
        }
    });
  }, [page]);

  const handelLoadMore = async () => {
    setPage(state => state + 1);
  }

  return (
    <>
    <div className='w-full py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

    {news?.map((newsItem: any) => {
        return <Link
            href={{
                pathname: '/news/[slug]',
                query: {slug: newsItem.slug}
              }}
            key={newsItem.id}
            className={`transition-all group relative ease-in-out duration-300 w-full flex flex-col-reverse  p-3 h-72 rounded-2xl cursor-pointer bg-cover`} style={{ backgroundImage: "url(" + `${config.AppStorage}/${newsItem.thumbnail}` + ")" }}>
            <div
                className='transition-all ease-in-out duration-300 absolute top-0 z-10 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-50 bg-gradient-to-b from-transparent to-gray-950'/>
            <h4 className='text-white font-roboto rtl:font-cairo z-20'>{newsItem.title}</h4>
        </Link>
    })}


</div>
 <button
  className='block mx-auto my-5 font-roboto rtl:font-cairo transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white disabled:border-gray-400 disabled:text-gray-400 disabled:hover:bg-white'
  onClick={handelLoadMore}
  disabled={isButtonDisabled}
 >
     __translate_more_button
 </button>
</>
);
}

export default News;