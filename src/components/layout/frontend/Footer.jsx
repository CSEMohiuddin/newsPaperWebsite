import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className='w-full bg-main dark:bg-gray-800'>
       <div className='container'>
            <div className='h-24 md:h-36 flex flex-col md:flex-row justify-center gap-4 md:justify-between items-center border-b-2 dark:border-slate-700'>
                <div>
                    <h1 className='text-xl md:text-3xl font-extrabold text-primary'>Turing<span className='text-yellow-500 dark:text-main'>Explorers</span> </h1>
                </div>
                
                <div className='flex items-center gap-4 md:gap-6 list-none'>
                    <Link to='contact' className='text-base cursor-pointer hover:underline hover:text-yellow-500 duration-300 dark:hover:text-gray-300 text-slate-100'>Contact</Link>
                    <Link to='privacy' className='text-base cursor-pointer hover:underline hover:text-yellow-500 duration-300 dark:hover:text-gray-300 text-slate-100'>Privacy</Link>
                    <li className='text-base cursor-pointer hover:underline hover:text-yellow-500 duration-300 dark:hover:text-gray-300 text-slate-100'>Trams of Service</li>
                    <li className='text-base cursor-pointer hover:underline hover:text-yellow-500 duration-300 dark:hover:text-gray-300 text-slate-100'>Advertise</li>
                </div>
            </div>
            <div className='h-14 flex justify-center items-center'>
                <span className='text-sm text-slate-100'>All Rights Reserved &copy; 2023 </span>
            </div>
       </div>
    </div>
  )
}

export default Footer