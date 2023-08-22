
import OurNewsLetter from "../utils/OurNewsLetter"
import RecentNews from "../utils/RecentNews"
import SocialLink from "../utils/SocialLink"

function PostCon({ news }) {

    const newLine = <br />;

    return (
        <div className='w-full  bg-primary dark:bg-gray-950'>
            <div className='container py'>
                <div className='flex md:flex-row flex-col gap-5'>
                    <div className="w-full md:w-2/3 flex flex-col gap-5">
                        <h1 className="heading">{news?.title}</h1>
                        <div className="">{news?.content.split("\n").map(text => {
                            if (!text == "" || !text.length > 2) {
                                return (
                                    <> <p className="font-poppins text-base leading-8 text-dark dark:text-slate-400 ">{text}</p> <br/></>
                                )
                            }
                        })}</div>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col gap-5 mt-2">
                        <OurNewsLetter />
                        <RecentNews />
                        <SocialLink />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCon