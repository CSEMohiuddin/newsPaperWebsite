import { useEffect } from 'react';
import PageCard from '../../components/utils/PageCard'
import ContactCon from '../../components/contact/ContactCon'

function Contact() {
  useEffect(()=>{
    document.title = `TuringExplorers | Contact`;
  })
  return (
    <div>
      <PageCard>Contact Us</PageCard>
      <ContactCon />
    </div>
  )
}

export default Contact