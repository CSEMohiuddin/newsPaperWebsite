

function NewsLetter() {
  return (
    <div className='w-full bg-main dark:bg-gray-800 py'>
        <div className='container'>
            <div className='py flex flex-col items-start max-w-screen-md mx-auto'>
                <h1 className='heading text-primary'>Join Our Newsletter</h1>
                <p className='title hover:no-underline hover:text-primary text-primary'>Get full coverage on news stories delivered straight to your inbox</p>
                <div className=' flex gap-4 flex-col md:flex-row pt-5 w-full'>
                    <input className='rounded-md  duration-300 px-2 py-2 bg-transparent border dark:border-gray-600 dark:focus:outline-gray-600 flex-1 focus:outline-primary text-primary' type="email" placeholder='Your Email'  />
                    <button className='px-4 py-2 rounded-md bg-primary dark:bg-gray-300 hover:bg-secondary duration-300 text-base font-semibold dark:text-zinc-950 text-dark'>Join Free</button>
                </div>
                <small className='text-primary text-xs py-3 dark:text-gray-400'>100% free, unsubscribe anytime</small>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter