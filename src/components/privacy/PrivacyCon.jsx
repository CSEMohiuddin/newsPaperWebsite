import HeadingParagraph from '../utils/HeadingParagraph'
import {text} from '../../assets/lib/index'

function PrivacyCon() {
  return (
    <div className='w-full dark:bg-gray-950 bg-primary py'>
        <div className='container py flex flex-col gap-4'>
            {
                text.map((txt, val)=>(
                    <HeadingParagraph key={val} txt={txt} />
                ))
            }
        </div>
    </div>
  )
}

export default PrivacyCon