import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../lib/utils";

import TopicCon from '../../components/topic/TopicCon'
import PageCard from '../../components/utils/PageCard' 



function Topic() {

  let {topic} = useParams()

  const [news, setNews] = useState([])
  
  const getData = async (topic) => {
    const { data } = await axios.post(`${baseUrl}/api/v1/news/category`,

      JSON.stringify({ name: topic }),
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    );
    setNews(data?.data)
  };
  
  useEffect(()=>{
    getData(topic);
    document.title = `TuringExplorers | ${topic} `;
  },[topic])



  return (
    <div>
        <PageCard>{topic}</PageCard>
        <TopicCon news={news} />
    </div>
  )
}

export default Topic