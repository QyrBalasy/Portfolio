import React from 'react'
import Footer from '../../components/footer'
import Education from '../../pages/Education'
import WorkHistory from '../../pages/WorkHistory'
import Certificates from '../../pages/Сertificates'

const Cv = () => {
  return (
    <div className="flex flex-col gap-y-16">
      <Education />
      <WorkHistory />
      <Certificates />
      <Footer />
    </div>
  )
}
export default Cv
