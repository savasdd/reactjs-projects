import React from 'react'
import { CCard, CCardBody, } from '@coreui/react'
import SinavList from './sinav-list'

class Sinav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <>
        <div>
          <SinavList />
        </div>
      </>
    )
  }
}

export default Sinav
