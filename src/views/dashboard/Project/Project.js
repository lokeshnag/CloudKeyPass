import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const Project = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          Project Vault
          <DocsLink href="#"/>
        </CCardHeader>
        <CCardBody>
          <p>text</p>
         
        </CCardBody>
      </CCard>



      
      <CCard>
        <CCardHeader>
          Headings
        </CCardHeader>
        <CCardBody>
           
          <div className="bd-example">
            text
          </div>

        </CCardBody>
      </CCard>
      
       
     




    </>
  )
}

export default Project
