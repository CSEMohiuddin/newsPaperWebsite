import NewsTitle from "../utils/NewsTitle"
import OurNewsLetter from "../utils/OurNewsLetter"
import RecentNews from "../utils/RecentNews"
import SocialLink from "../utils/SocialLink"        

function CategoryCon({news}) {

  return (
    <div className='w-full bg-primary dark:bg-gray-950'>
        <div className='container py'>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className=" md:w-2/3 w-full grid gap-5 grid-cols-1 md:grid-cols-2">
                    {
                        news?.map((n , index)=>(
                            <NewsTitle key={index} news={n} />
                        ))
                    }
                </div>
                <div className="md:w-1/3 w-full flex flex-col gap-y-5 md:gap-5 mt-2">
                    <OurNewsLetter />
                    <RecentNews />
                    <SocialLink />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryCon