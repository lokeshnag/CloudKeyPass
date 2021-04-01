import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="/Dashboard" target="_blank" rel="noopener noreferrer">accenture</a>
        <span className="ml-1">&copy; 2021</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">developed by</span>
        <a href="/Dashboard" target="_blank" rel="noopener noreferrer">Scripting Team</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
