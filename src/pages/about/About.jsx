import { useEffect } from "react"
import PageCard from "../../components/utils/PageCard"
import AboutCon from "../../components/about/AboutCon"

function About() {
  useEffect(()=>{
    document.title = `TuringExplorers | About`;
  })
  return (
    <div>
        <PageCard>About Us</PageCard>
        <AboutCon />
    </div>
  )
}

export default About