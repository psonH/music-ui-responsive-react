import React from 'react'
import { Navbar } from 'rsuite'
import Nav from "@rsuite/responsive-nav";

export const Navigation = () => {
    return (
        <>
            <Navbar>
                <Navbar.Header >
                    <h4 className="py-3 px-2">Music Lovers</h4>
                </Navbar.Header>
                <Navbar.Body>
                    <Nav pullRight>
                        <Nav.Item>Features</Nav.Item>
                        <Nav.Item>News</Nav.Item>
                        <Nav.Item>Newsletter</Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        </>
    )
}
