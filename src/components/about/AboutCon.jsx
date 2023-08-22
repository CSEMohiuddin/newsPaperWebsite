import HeadingParagraph from "../utils/HeadingParagraph"
import RecentNews from "../utils/RecentNews"
import OurNewsLetter from '../utils/OurNewsLetter'
import SocialLink from '../utils/SocialLink'
import { text } from "../../assets/lib"

function AboutCon() {
  return (
    <div className='w-full bg-primary dark:bg-gray-950 py'>
        <div className='container py flex flex-col md:flex-row md:justify-between gap-5'>
            <div className=' w-full md:w-2/3 flex flex-col gap-4'>
              {
                text.map((txt, val)=>(
                  < HeadingParagraph key={val} txt={txt} />
                ))
              }
            </div>
            <div className='md:w-1/3 w-full flex flex-col gap-5'>
              <RecentNews />
              <OurNewsLetter />
              <SocialLink />
            </div>
        </div>
    </div>
  )
}

export default AboutCon