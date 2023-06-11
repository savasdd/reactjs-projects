import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch, connect } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'
import {
  SIDEBAR_SHOW
} from "../../src/core/actions/Type";
import { getUser } from 'src/core/token-service'


class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarShow: 'responsive',
      username: getUser(),
    }
  }

  async componentWillReceiveProps(nextProps) {
    this.setState({
      sidebarShow: nextProps.state.main.get('sidebarShow'),

    });
  }


  render() {
    const { sidebarShow, username } = this.state;
    const { dispatch, state } = this.props;

    const toggleSidebar = () => {
      const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive';
      dispatch({ type: SIDEBAR_SHOW, data: { sidebarShow: val } });
    };

    const toggleSidebarMobile = () => {
      const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive';
      dispatch({ type: SIDEBAR_SHOW, data: { sidebarShow: val } });
    };


    return (
      <CHeader position="sticky" className="mb-4">
        <CContainer fluid>
          <CHeaderToggler
            className="ps-1"
            onClick={toggleSidebar}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
          <CHeaderBrand className="mx-auto d-md-none" to="/">
            <CIcon icon={logo} height={48} alt="Logo" />
          </CHeaderBrand>
          <CHeaderNav className="d-none d-md-flex me-auto">
            <CNavItem>
              <CNavLink to="/dashboard" component={NavLink}>
                SINAV SONUÇ SORGULAMA
              </CNavLink>
            </CNavItem>
          </CHeaderNav>
          <CHeaderNav>
            {username}
            {/* <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem> */}
          </CHeaderNav>
          <CHeaderNav className="ms-3">
            <AppHeaderDropdown />
          </CHeaderNav>
        </CContainer>
        <CHeaderDivider />
        <CContainer fluid>
          <AppBreadcrumb />
        </CContainer>
      </CHeader>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state,
  }
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
