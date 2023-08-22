import HeadingParagraph from "../utils/HeadingParagraph"
import OurNewsLetter from '../utils/OurNewsLetter'
import SocialLink from '../utils/SocialLink'

function ContactCon() {

    const text = [
        {
            title : "Let's Connect!",
            description : "Whether you're an individual user or a business, reach out to the Turing Explorers team for any questions, feedback, or inquiries, we're here to listen and help you get the most from our  news platform"
        },
    ]

  return (
    <div className='w-full bg-primary dark:bg-gray-950 py'>
        <div className='container py flex flex-col md:flex-row justify-between gap-5'>
            <div className='w-full md:w-2/3 flex flex-col gap-5'>
                <div>
                    {
                        text.map((txt,val)=>(
                            <HeadingParagraph key={val} txt={txt} />
                        ))
                    }
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="text-base font-semibold text-main cursor-pointer hover:underline" >Email : turingexplorers@gmail.com</h2>
                    <span className="flex flex-col gap-1">
                        <p className="title hover:text-dark hover:no-underline">Send Us a Message</p>
                        <small className="text-xs font-light dark:text-gray-400 tracking-wide text-dark" >Your email address will not be published. All the fields are required.</small>
                    </span>
                    <div className="flex md:flex-row flex-col gap-4 justify-between pt-2">
                        <span className=" flex flex-col gap-2 ">
                            <label className="text-sm text-dark font-medium dark:text-gray-400" htmlFor="">Your Name</label>
                            <input className="w-full py-2 bg-secondary dark:bg-gray-900 dark:focus:outline-0 dark:text-gray-400 rounded-md border px-2 duration-300 border-main focus:outline-main" type="text" placeholder="" />
                        </span>
                        <span className=" flex flex-col gap-2 " >
                            <label className="text-sm text-dark font-medium dark:text-gray-400" htmlFor="">Phone</label>
                            <input className="w-full py-2 bg-secondary dark:bg-gray-900 dark:focus:outline-0 dark:text-gray-400 rounded-md border px-2 duration-300 border-main focus:outline-main" type="text" placeholder="" />
                        </span>
                        <span className=" flex flex-col gap-2 ">
                            <label  className="text-sm text-dark font-medium dark:text-gray-400" htmlFor="">Your Email</label>
                            <input className="w-full py-2 bg-secondary dark:bg-gray-900 dark:focus:outline-0 dark:text-gray-400 rounded-md border px-2 duration-300 border-main focus:outline-main" type="text" placeholder="" />
                        </span>
                    </div>
                    <div className=" flex flex-col gap-2 pt-2 ">
                        <label className="text-sm text-dark font-medium dark:text-gray-400" htmlFor="">Your Message</label>
                        <textarea className="w-full py-2 h-32 md:h-44 bg-secondary dark:bg-gray-900 dark:focus:outline-0 dark:text-gray-400 rounded-md border px-2 duration-300 border-main focus:outline-main" type="text" name="" id="" rows="8"></textarea>
                    </div>
                    <button className="bg-main px-4 py-2 mt-2 hover:bg-blue-500 duration-300 rounded-md text-primary font-semibold text-base">Submit</button>
                </div>
            </div>
            <div className='w-full md:w-1/3 flex flex-col gap-5'>
              <OurNewsLetter />
              <SocialLink />
            </div>
        </div>
    </div>
  )
}

export default ContactCon