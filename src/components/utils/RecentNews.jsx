import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../../lib/utils";
import NewsTitle from "./NewsTitle"

function RecentNews() {

  const [latest, setLatestNews] = useState([])

  const getData = async () => {
    const { data } = await axios.get(`${baseUrl}/api/v1/news/letest`);
    setLatestNews(data.data);
  };
  
  useEffect(()=>{
    getData();
  },[])
  


  return (
    <div className='w-full bg-secondary dark:bg-gray-900 p-5 flex flex-col items-center'>
        <h1 className='title hover:text-dark hover:no-underline pb-4 border-b border-gray-300 dark:border-gray-600'>Recent News on TuringExplorers</h1>
        <div className="py-3 flex flex-col gap-5">
            <NewsTitle row={true} news={latest[0]} />
            <NewsTitle row={true} news={latest[1]} />
            <NewsTitle row={true} news={latest[2]} /> 
            <NewsTitle row={true} news={latest[3]} />
        </div>
    </div>
  )
}

export default RecentNews