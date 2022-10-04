import React from 'react'
import Footer from '../../components/footer'
import Containers from '../../components/UI/Containers'
import Education from '../../pages/Education'
import WorkHistory from '../../pages/WorkHistory'
import Certificates from '../../pages/Сertificates'

const Cv = () => {
  return (
    <Containers>
      <Education />
      <WorkHistory />
      <Certificates />
      <Footer />
    </Containers>
  )
}
export default Cv
