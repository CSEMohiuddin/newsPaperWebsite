import axios from "axios";
import { useState, useEffect } from "react";
import TitleCard from "../utils/TitleCard"
import TitleCardTwo from "../utils/TitleCardTwo";
import TitleCardThree from "../utils/TitleCardThree";
import TitleCardFour from "../utils/TitleCardFour";
import TitleCardFive from "../utils/TitleCardFive";
import TitleCardSix from "../utils/TitleCardSix";
import { baseUrl } from "../../lib/utils";

function TrendingTopic() {

  const [ctg, setCtg] = useState('')

  const getData = async () => {
    const { data } = await axios.get(`${baseUrl}/api/v1/news/category/all`);
    const ctgData = data.data.slice(0,6);
    setCtg(ctgData);
  };

  useEffect(()=>{
    getData();
  },[])


  return (
    <div className='w-full bg-primary dark:bg-gray-950'>
        <div className='container py'>
            <h1 className='heading'>Today's Trending Topics</h1>
            <div className='flex flex-col md:grid md:grid-cols-3 gap-5 py'>
                <TitleCard ctg={ctg[0]} />
                <TitleCardTwo ctg={ctg[1]} />
                <TitleCardThree ctg={ctg[2]} />
                <TitleCardFour ctg={ctg[3]} />
                <TitleCardFive ctg={ctg[4]} />
                <TitleCardSix ctg={ctg[5]} />
            </div>
        </div>
    </div>
  )
}

export default TrendingTopic