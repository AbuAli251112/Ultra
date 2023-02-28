import React from 'react';
import { NavbarSection , Logo , LogoText , UlList , ListItem ,  Anchor , MyLink } from './NavbarComponentStyle.js'

const NavbarComponent = () => {
    return (
        <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <ListItem><MyLink className='anchor' to="/">Home</MyLink></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><MyLink className='anchor' to="/contact">Contact</MyLink></ListItem>
                </UlList>
            </div>
        </NavbarSection>
    );
}

export default NavbarComponent;
