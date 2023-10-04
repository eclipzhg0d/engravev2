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
import ThemeSwitch from "../shared/theme-switch";
import Search from "../shared/search";
import Profile from "../shared/profile";
import Cart from "../shared/cart";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserNav } from "../dashboard/user-nav";
import { components } from "@/lib/static-data";

export default function Navbar({ ...props }) {
  return (
    <nav className="sticky top-0 z-10 w-full px-5 py-5 md:py-2 bg-white border-b md:px-24 border-zinc-100 dark:border-zinc-900 dark:bg-background">
      <NavigationMenu className="flex items-center justify-between">
        <NavigationMenuList>
          <NavigationMenuItem className="pr-5 font-bold uppercase">
            <Link href="/">Engravedom</Link>
          </NavigationMenuItem>
          <div className="hidden md:flex">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          Engravedom
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          The Dom of Customizable Laser Engraving Products
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    What we do and why we do it.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Customization">
                    How to customize our products.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Examples">
                    Examples of our products.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="outline" className="w-full">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>

        <NavigationMenuList className="items-center hidden gap-2 md:flex">
          <NavigationMenuItem>
            <ThemeSwitch />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Search />
          </NavigationMenuItem>
          <NavigationMenuItem>
            {props.user ? (
              <UserNav initials="AG" user={props.user} />
            ) : (
              <Link href="/auth/sign-in">
                <Profile />
              </Link>
            )}
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Cart />
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify />
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="font-bold uppercase">
                    Engravedom
                  </Link>
                </SheetTitle>
                <SheetDescription>
                  <ul className="flex flex-col w-full pt-5 items-baseline">
                    <li>
                      <Button variant="ghost" className="w-full">
                        <Link href="/">Home</Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant="ghost" className="w-full">
                        <Link href="/">Getting Started</Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant="ghost" className="w-full">
                        <Link href="/">Products</Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant="ghost" className="w-full">
                        <Link href="/">Contact</Link>
                      </Button>
                    </li>
                  </ul>
                  <ul className="flex items-center gap-3 pt-7">
                    <li>
                      <Button variant="ghost">
                        <Link href="/auth/sign-in">
                          <Profile />
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant="ghost">
                        <Link href="/">
                          <Cart />
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant="ghost">
                        <Link href="/">
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
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
