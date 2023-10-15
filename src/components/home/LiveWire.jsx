import axios from 'axios'
import { useState, useEffect } from "react"
import NewsTitle from "../utils/NewsTitle"
import OurNewsLetter from "../utils/OurNewsLetter"
import SocialLink from "../utils/SocialLink"
import RecentNews from "../utils/RecentNews"
import { baseUrl } from '../../lib/utils'

function LiveWire() {

    const [news, setNews] = useState('')
    const [pages, setPages] = useState(0)
    const [loading, setLoading] = useState(false)

    const getData = async (pages) => {
    setLoading(true)
    const { data } = await axios.get(`${baseUrl}/api/v1/news/page/${pages}`);
    setNews(data);
    setLoading(false)
    };

    useEffect(()=>{
    getData(pages);
    },[pages])

  return (
    <div className='w-full bg-primary dark:bg-gray-950'>
        <div className='container py'>
            <h1 className='heading'>Live Wire - All Stories</h1>
            <div className='md:flex md:justify-between py-4 gap-5'>
                <div className=' flex-1 space-y-5'>
                    {/* <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
                        <NewsTitle  news={news?.data[0]} />
                        <NewsTitle  news={news?.data[1]} />
                    </div> */}
                    <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
                        {
                            news?.data?.map((nws, val)=>(
                                <NewsTitle key={val} story={true} news={nws} />
                            ))
                        }
                    </div>
                    <input onClick={()=>setPages(pages + 1 )} disabled={loading} type='submit' value={loading ? "Loading..." : "Load More Stories"} className="w-full bg-main outline-0 hover:bg-blue-500 py-3 relative md:top-5 rounded-md duration-300 font-base font-semibold text-center cursor-pointer text-primary" />
                </div>
                <div className='w-[360px] flex flex-col mx-auto gap-y-5 mt-5 md:mt-2'>
                    <OurNewsLetter />
                    <SocialLink />
                    <RecentNews />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LiveWire