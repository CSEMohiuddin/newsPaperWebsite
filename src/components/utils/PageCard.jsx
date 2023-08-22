

function PageCard({children}) {
  return (
    <div className='w-full dark:bg-gray-900 bg-secondary'>
        <div className='container py-10 md:py-16'>
            <h1 className='heading text-center'>{children}</h1>
        </div>
    </div>
  )
}

export default PageCard