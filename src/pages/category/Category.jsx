import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CategoryCon from "../../components/categroy/CategoryCon";
import PageCard from '../../components/utils/PageCard' 
import { baseUrl } from "../../lib/utils";



function Category() {

  let {ctg} = useParams()

  const [news, setNews] = useState([])
  
  const getData = async (ctg) => {
    const { data } = await axios.post(`${baseUrl}/api/v1/news/category`,

      JSON.stringify({ name: ctg }),
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    );
    setNews(data?.data)
  };
  
  useEffect(()=>{
    getData(ctg);
    document.title = `TuringExplorers | ${ctg}`;
  },[ctg])


  return (
    <div>
        <PageCard>{ctg}</PageCard>
        <CategoryCon news={news} />
    </div>
  )
}

export default Category