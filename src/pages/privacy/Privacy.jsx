import { useEffect } from 'react';
import PrivacyCon from '../../components/privacy/PrivacyCon'
import PageCard from '../../components/utils/PageCard'

function Privacy() {
  useEffect(()=>{
    document.title = `TuringExplorers | Privacy`;
  })
  return (
    <div>
      <PageCard>Privacy Policy</PageCard>
      <PrivacyCon />
    </div>
  )
}

export default Privacy