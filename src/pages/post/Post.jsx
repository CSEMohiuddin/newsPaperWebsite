import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import PostBanner from "../../components/post/PostBanner"
import PostCon from "../../components/post/PostCon"

function Post() {

let {slug} = useParams()

const [news, setNews] = useState('')

const getData = async (slug) => {
  const { data } = await axios.get(`https://api.turingexplorers.com/api/v1/news/${slug}`);
 
  setNews(data.data);
};

useEffect(()=>{
  getData(slug);
  document.title = `TuringExplorers | ${news[0]?.title}`;
},[slug, news])


  return (
    <div>
        <PostBanner news={news[0]} />
        <PostCon news={news[0]} />
    </div>
  )
}

export default Post