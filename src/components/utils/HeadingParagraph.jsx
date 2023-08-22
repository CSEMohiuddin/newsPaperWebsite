import React from 'react'

function HeadingParagraph({txt}) {
  return (
    <div className='w-full '>
        <div className='flex flex-col items-start justify-start gap-2'>
            <h2 className='text-xl inline-block font-semibold hover:no-underlin dark:text-gray-300 text-dark '>{txt.title}</h2>
            <p className='text-base dark:text-gray-400 text-dark'>{txt.description}</p>
        </div>
    </div>
  )
}

export default HeadingParagraph