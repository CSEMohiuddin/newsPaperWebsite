import moment from "moment"
import { Link } from "react-router-dom"

function NewsTitle({news, row , story}) {



  return (
    <>
      <div className={ `${row ? "!flex-row items-start" : ""} ${story ? '!flex-row ' : ''} w-full py-2 gap-2 md:gap-5 flex-col flex`}>
        <div className={`${row ? 'md:h-20 h-16 !w-32 ' : ''} ${story ? '!md:h-28 !h-20 !w-32' : ''} w-full flex overflow-hidden rounded-md`}>
          <Link to={`/post/${news?.slug}`}>
            <img className={` ${row ? 'min-h-full min-w-full' : ''} ${story ? '!min-w-full !min-h-full' : ''} w-[450px] md:w-[500px] lg:w-[700px] object-cover hover:scale-105 duration-300 rounded-md`} src={news?.image} alt="" />
          </Link>
        </div>
        <div className={`${story ? "flex-1" : ""} ${row ? 'flex-1' : ''} flex flex-col justify-center items-start`}>
            <p className={` ${row ? "text-sm font-medium" : " " } text-base capitalize cursor-pointer hover:text-blue-500 text-blue-700 flex-1`}>{news?.category}</p>
            <Link to={`/post/${news?.slug}`}>
              <h1 className={`${row ? 'text-[15px] leading-5' : ''} title capitalize break-words`}>{news?.title.substring(0, 59)}</h1>
            </Link>
            <small className={`${row ? 'text-xs font-extralight' : ''} text-dark cursor-pointer dark:text-slate-400`}>{moment(news?.createdAt).startOf('date').fromNow('') }</small>
        </div>
      </div>
    </>
  )
}

export default NewsTitle