import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs'
import NewsTitle from './NewsTitle'
import { baseUrl } from '../../lib/utils';

function TitleCardTwo({ ctg }) {


  const [news, setNews] = useState([])

  const getData = async (ctg) => {

    const { data } = await axios.post(`${baseUrl}/api/v1/news/category`,

      JSON.stringify({ name: ctg }),

      {
        headers: {
          'content-type': 'application/json'
        }
      }

    );

    let i = 1
    let newsData =data && data.data.map(item => {
      item.sl = i
      i++
      return item
    }).filter(item => item.sl < 4)

    setNews(newsData)

  };

  useEffect(() => {
    getData(ctg);
  }, [ctg])

  return (
    <div className='bg-secondary dark:bg-gray-900 rounded-md p-2 md:p-5 flex flex-col'>
      <div className={` ${!ctg ? 'hidden': ''} flex items-center justify-between pb-5 border-gray-300 dark:border-gray-600 border-b`}>
        <h1 className='title hover:no-underline hover:text-dark dark:hover:text-slate-50'>{ctg}</h1>
        <Link to={`/topic/${ctg}`} >
          <button className='px-3 py-2 bg-main rounded-md text-base font-medium text-primary flex items-center gap-2 hover:bg-blue-500'>More <BsArrowRightCircle /> </button>
        </Link>
      </div>
      <div className='py-2 space-y-2'>
        {
          news?.map((n, val) => (
            <NewsTitle key={val} row={true} news={n} />
          ))
        }
      </div>
    </div>
  )
}

export default TitleCardTwo