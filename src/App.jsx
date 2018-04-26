import React from 'react'
import {Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container} from 'mdbreact'
import {HashRouter as Router} from 'react-router-dom'

import Routes from './Routes'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapse: false,
      isWideEnough: false
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.setState({
      collapse: !this.state.collapse
    })
  }

  render () {
    const bgPink = {backgroundColor: '#ec407a'}
    return (
      <Router>
        <div>
          <Navbar style={bgPink} dark expand='md' scrolling fixed='top'>
            <NavbarBrand href='/'>
              <strong>Navbar</strong>
            </NavbarBrand>
            {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left>
                <NavItem active>
                  <NavLink to='/'>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/form'>Form</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/map'>Map</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
          <Container style={{marginTop: '4rem'}} className='mt-5'>
            <Routes />
          </Container>
        </div>
      </Router>
    )
  }
}

export default App
