import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          ETKB
        </a>
        <span className="ms-1">&copy; 2022</span>
      </div>
      <div className="ms-auto">
        <a href="https://github.com/savasdd" target="_blank" rel="noopener noreferrer">
          svsdd github
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
