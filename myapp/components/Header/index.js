'use client'
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import Link from 'next/link';
import React from 'react'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import ThemeToggle from '../ThemeToggle';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Home",
    "Home",
    "Create",
    "Profile",

  ];
  return (
    <header className='px-4 py-8'>
     <Navbar onMenuOpenChange={setIsMenuOpen}>
     <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">FITNESS LIBRARY</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/create">
            Create
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/profile">
            Profile
          </Link>
        </NavbarItem>
   </NavbarContent>
   <NavbarContent justify="end">
   <NavbarItem className="flex items-center gap-2">
      <ThemeToggle />
          <SignedIn>
          <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </NavbarItem>
        <NavbarItem>
          
        <SignedOut>
            <Button asChild className="rounded-full" size="md">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </NavbarItem>
  </NavbarContent>

           
   <NavbarMenu>
   {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

    </NavbarMenu>
    </Navbar>
    </header>
  )
}

export default Header