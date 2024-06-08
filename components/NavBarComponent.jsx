import React from 'react'
import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";

const NavBarComponent = () => {
  return (
    <>
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
	  <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
    </>
  )
}

export default NavBarComponent
