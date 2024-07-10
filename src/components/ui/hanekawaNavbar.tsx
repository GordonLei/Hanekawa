/*

This is the navBar

*/

"use client";

//  imports
//    npm packages
import React from "react";
import {
    Image,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@nextui-org/react";

interface menuItem {
    url: string;
    name: string;
}

//  This is the component
export default function HanekawaNavbar() {
    //  states
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    //  default values
    const menuItems: menuItem[] = [
        { url: "home", name: "Home" },
        { url: "search", name: "Search" },
        { url: "calendar", name: "Calendar" },
    ];

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            className="bg-opacity-95  z-50"
            isBordered
        >
            {/* This Navbar Content contains the toggle button to the NavBar + the logo image */}
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="text-grey-1">
                    <Link href="/" className="text-grey-1">
                        <Image
                            width={32}
                            alt="Hanekawa logo"
                            src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/hextech-images/chest.png"
                        />
                        <p className="font-bold text-inherit">Hanekawa</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            {/* This Navbar Content contains the actual navBar text */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link
                        color="foreground"
                        href="/home"
                        className="text-grey-1"
                    >
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color="foreground"
                        href="/search"
                        className="text-grey-1"
                    >
                        Search
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color="foreground"
                        href="/calendar"
                        className="text-grey-1"
                    >
                        Calendar
                    </Link>
                </NavbarItem>
            </NavbarContent>
            {/* Menu when the screen is too small */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2
                                    ? "primary"
                                    : index === menuItems.length - 1
                                    ? "danger"
                                    : "foreground"
                            }
                            className="w-full"
                            href={item.url}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
