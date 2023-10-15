import axios from "axios"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import OurNewsLetter from "../utils/OurNewsLetter"
import RecentNews from "../utils/RecentNews"
import SocialLink from "../utils/SocialLink"
import { baseUrl } from "../../lib/utils"

function AllCategoryCon() {

    const [allCtg, setAllCtg] = useState('')

    const getData = async () => {
      const { data } = await axios.get(`${baseUrl}/api/v1/news/category/all`);
      setAllCtg(data?.data);
    };
  
    useEffect(()=>{
      getData();
    },[])

    return (
        <div className='w-full bg-primary dark:bg-gray-950'>
            <div className='container py'>
                <div className='flex justify-between flex-col md:flex-row items-start gap-5'>
                    <div className="md:w-2/3 w-full grid grid-cols-2 md:grid-cols-3 gap-5">
                        { allCtg &&
                            allCtg?.map((ctg, val)=>(
                                <Link to={`/category/${ctg}`} key={val}>
                                    <div className="flex items-center justify-center h-28 md:h-40 dark:bg-gray-900 bg-secondary cursor-pointer rounded-md hover:scale-105 duration-300 shadow">
                                        <p className="text-lg md:text-xl font-poppins font-medium md:font-semibold tracking-wide text-center break-words px-2 dark:text-gray-300 text-dark hover:underline">{ctg}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="md:w-1/3 w-full flex flex-col gap-y-5 md:gap-5">
                        <OurNewsLetter />
                        <RecentNews />
                        <SocialLink />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCategoryCon