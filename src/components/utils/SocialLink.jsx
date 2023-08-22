import {BiLogoFacebook ,BiLogoTwitter, BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'

function SocialLink() {
  return (
    <div className='w-full bg-secondary dark:bg-slate-900 p-5  rounded-md'>
        <div className='flex justify-center flex-col gap-3 pb-3'>
            <div className='flex flex-col items-center pb-4 border-b border-gray-300 dark:border-gray-600'>
                <h1 className='title hover:text-dark hover:no-underline'>Stay Connected</h1>
            </div>
            <div className='flex justify-evenly gap-2 pt-3'>
                <span className='h-8 w-8 flex items-center justify-center rounded-full bg-main text-primary cursor-pointer hover:bg-blue-500 duration-300 '><BiLogoFacebook size={22} /></span>
                <span className='h-8 w-8 flex items-center justify-center rounded-full bg-main text-primary cursor-pointer hover:bg-blue-500 duration-300 '><BiLogoTwitter size={22} /></span>
                <span className='h-8 w-8 flex items-center justify-center rounded-full bg-main text-primary cursor-pointer hover:bg-blue-500 duration-300 '><BiLogoLinkedin size={22} /></span>
                <span className='h-8 w-8 flex items-center justify-center rounded-full bg-main text-primary cursor-pointer hover:bg-blue-500 duration-300 '><AiOutlineInstagram size={22} /></span>
            </div>
        </div>
    </div>
  )
}

export default SocialLink