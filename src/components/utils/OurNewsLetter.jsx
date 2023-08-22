

function OurNewsLetter() {
  return (
    <div className='w-full bg-secondary dark:bg-gray-900 p-5  rounded-md'>
        <div className='flex justify-center flex-col gap-3 pb-3'>
            <h1 className='heading text-center'>Sign Up</h1>
            <h2 className='title text-center hover:text-dark hover:no-underline'>Join Our Newsletter</h2>
            <input className='w-72 py-4 rounded-md bg-transparent px-3 mx-auto border border-main dark:border-gray-600 outline-0 dark:text-gray-400 text-dark' type="email" placeholder='Enter Your Email'/>
            <button className='bg-main hover:bg-blue-500 text-primary duration-300 font-medium w-72 py-4 rounded-md mx-auto text-base'>Join Free</button>
        </div>
    </div>
  )
}

export default OurNewsLetter