import { useState, useEffect } from "react"
import axios from 'axios'

import StorisCard from "../utils/StorisCard"
import StorisCardTwo from "../utils/StorisCardTwo"
import StorisCardThree from "../utils/StorisCardThree"
import StorisCardFour from "../utils/StorisCardFour"

function StorisCategory() {

  
  const [ctg, setCtg] = useState('')

  const getData = async () => {
    const { data } = await axios.get(`https://api.turingexplorers.com/api/v1/news/category/all`);
    const ctgData = data.data.slice(1,5);
    setCtg(ctgData);
  };

  useEffect(()=>{
    getData();
  },[])


  return (
    <div className='w-full bg-secondary dark:bg-gray-900'>
        <div className='container py'>
            <h1 className='heading'>Stories by Categroy</h1>
            <div className='flex flex-col md:grid md:grid-cols-2 gap-5 py'>
                <StorisCard ctg={ctg[0]} />
                <StorisCardTwo ctg={ctg[1]} />
                <StorisCardThree ctg={ctg[2]} />
                <StorisCardFour ctg={ctg[3]} />
            </div>
        </div>
    </div>
  )
}

export default StorisCategory