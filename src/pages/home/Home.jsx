import { useEffect } from "react"
import Banner from "../../components/home/Banner"
import NewsLetter from "../../components/home/NewsLetter"
import TrendingTopic from "../../components/home/TrendingTopic"
import StorisCategory from "../../components/home/StorisCategory"
import LiveWire from "../../components/home/LiveWire"

function Home() {

  useEffect(()=>{
    document.title = `TuringExplorers | Home `;
  })

  return (
    <div>
        <Banner />
        <NewsLetter />
        <TrendingTopic />
        <StorisCategory />
        <LiveWire />
    </div>
  )
}

export default Home