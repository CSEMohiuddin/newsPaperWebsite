import axios from "axios";
import { useState, useEffect } from "react"
import NewsTitle from "../utils/NewsTitle"

function Banner() {

const [latest, setLatestNews] = useState([])

const getData = async () => {
  const { data } = await axios.get(`https://api.turingexplorers.com/api/v1/news/letest`);
  setLatestNews(data.data);
};

useEffect(()=>{
  getData();
},[])


  return (
    <div className='w-full bg-secondary dark:bg-gray-900 h-auto'>
        <div className='container'>
          <div className='py'>
            <h1 className='heading'>Today's Top Stories</h1>
            <p className='title hover:no-underline hover:text-dark  '>Always in search of truth.</p>
            <div className=' md:flex md:justify-between py-3 md:gap-5'>
              <div className='w-full md:flex md:w-1/2'>
                <NewsTitle news={latest[0]} />
              </div>
              <div className=' w-full md:flex md:w-1/2'>
                  <div className='grid grid-cols-2 gap-x-5'>
                    <NewsTitle news={latest[1]} />
                    <NewsTitle news={latest[2]} />
                    <NewsTitle news={latest[3]} />
                    <NewsTitle news={latest[4]} />
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner