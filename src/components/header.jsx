"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Navigation } from "lucide-react";
import ThemeSwitch from "./theme-switch";
import Search from "./search";
import Profile from "./profile";
import Cart from "./cart";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Header() {
  return (
    <nav className='sticky top-0 z-10 w-full px-5 py-2 bg-white border-b md:px-24 border-zinc-100 dark:border-zinc-900 dark:bg-black'>
      <NavigationMenu className='flex items-center justify-between'>
        <NavigationMenuList>
          <NavigationMenuItem className='pr-5 font-bold uppercase'>
            <Link href='/'>Engravedom</Link>
          </NavigationMenuItem>
          <div className='hidden md:flex'>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                  <li className='row-span-3'>
                    <NavigationMenuLink asChild>
                      <a
                        className='flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md'
                        href='/'
                      >
                        <div className='mt-4 mb-2 text-lg font-medium'>
                          Engravedom
                        </div>
                        <p className='text-sm leading-tight text-muted-foreground'>
                          The Dom of Customizable Laser Engraving Products
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href='/docs' title='Introduction'>
                    What we do and why we do it.
                  </ListItem>
                  <ListItem href='/docs/installation' title='Customization'>
                    How to customize our products.
                  </ListItem>
                  <ListItem href='/docs/primitives/typography' title='Examples'>
                    Examples of our products.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/docs' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>

        <NavigationMenuList className='items-center hidden gap-2 md:flex'>
          <NavigationMenuItem>
            <ThemeSwitch />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Search />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Profile />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Cart />
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger>
              <Button variant='ghost' size='icon'>
                <AlignJustify />
              </Button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link href='/' className='font-bold uppercase'>
                    Engravedom
                  </Link>
                </SheetTitle>
                <SheetDescription>
                  <ul className='flex flex-col items-center w-full pt-5'>
                    <li>
                      <Button variant='ghost' className='w-full'>
                        <Link href='/'>Home</Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant='ghost'>
                        <Link href='/'>Getting Started</Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant='ghost'>
                        <Link href='/'>Products</Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant='ghost'>
                        <Link href='/'>Contact</Link>
                      </Button>
                    </li>
                  </ul>
                  <ul className='flex items-center justify-center gap-3 pt-7'>
                    <li>
                      <Button variant='ghost'>
                        <Link href='/'>
                          <Profile />
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant='ghost'>
                        <Link href='/'>
                          <Cart />
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant='ghost'>
                        <Link href='/'>
                          <ThemeSwitch />
                        </Link>
                      </Button>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </NavigationMenu>
    </nav>
  );
}

const ListItem = ({ className, title, children, ...props }, href) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='text-sm leading-snug line-clamp-2 text-muted-foreground'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
