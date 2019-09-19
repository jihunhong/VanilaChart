import React, {Component} from 'react';
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon 
} from "mdbreact";


class Navbar extends Component{
    
    state = {
        isOpen : false
    };

    toggleCollapse  = () => {
        this.setState({isOpen: !this.state.isOpen});
    };
    
    

    render(){
        
        const navbarColor = {
            backgroundColor: '#161c27b5'
        };

        return(
            
                <MDBNavbar style={navbarColor} dark expand="lg" scrolling="true" fixed="top" color="black" transparent="true">
                <MDBNavbarBrand>
                <strong className="white-text">Vanila Chart</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                        <MDBNavItem>
                        <MDBNavLink to="/melon" chartname={"melon"}>melon</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        <MDBNavLink to="/genie" chartname={"genie"}>genie</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                         <MDBNavLink to="/bugs" chartname={"bugs"}>bugs</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                        <MDBNavLink className="waves-effect waves-light" to="#!">
                            <MDBIcon fab icon="twitter" />
                        </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        <MDBNavLink className="waves-effect waves-light" to="#!">
                            <MDBIcon fab icon="google-plus-g" />
                        </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                            <MDBIcon icon="user" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default">
                            <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
        )
    }
}

export default Navbar;