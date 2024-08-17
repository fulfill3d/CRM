"use client";

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
} from "@nextui-org/react";
import Link from "next/link";
import classNames from "classnames";
import {IdentityControl} from "@/msal/identity-control";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {User} from "lucide-react";

function AppNavBar({ theme = "dark" }) {
    return (
        <Navbar
            maxWidth={"2xl"}
            className={classNames({
                "dark text-foreground bg-background": theme === "dark",
            })}
        >
            <NavbarBrand className="hidden md:flex">
                <Link className="font-bold text-inherit" href="/">
                    CRM
                </Link>
            </NavbarBrand>
            <NavbarContent>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="overflow-hidden rounded-full"
                        >
                            <User
                                className="overflow-hidden rounded-full"
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>
                            My Account
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link
                                href="/settings"
                            >
                                Settings
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link
                                href="/support"
                            >
                                Support
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <IdentityControl />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </NavbarContent>
        </Navbar>
    );
}

export default AppNavBar;
