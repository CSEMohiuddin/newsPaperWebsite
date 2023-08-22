import moment from "moment"

function PostBanner({news}) {
  return (
    <div className='w-full bg-primary dark:bg-gray-950'>
        <div className='container'>
            <div className='relative  w-full overflow-hidden rounded-md md:h-[calc(100vh-70px)]'>
                <img className='w-full h-full object-cover  rounded-md' src={news?.image} alt="" />
                <div className="absolute bottom-0 left-0 w-full h-full md:h-2/3 bg-gradient-to-t from-black flex flex-col justify-center">
                    <span className=" md:max-w-screen-md px-5 mx-auto flex flex-col gap-3">
                        <p className="text-sm text-primary">{news?.category}</p>
                        <h1 className="heading  text-primary">{news?.title}</h1>
                        <small className="text-xs text-primary">{moment(news?.createdAt).startOf('date').fromNow('') }</small>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostBanner