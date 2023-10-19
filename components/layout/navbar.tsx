import Link from "next/link";
import {ShoppingCart, Tally3} from "lucide-react"
import {Button} from "@/components/ui/button"
import {SearchInput} from "@/components/ui/searchInput"
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx"
import routes from "@/constants/routes"
import { cn } from "@/lib/utils"

const Navbar = () => {
    const pathname = usePathname();
    const [toggleMenu, setToggleMenu] = useState(false);
    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };
    const [screenWidth, setScreenWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 800
    );
    useEffect(() => {
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", changeWidth);
        return () => {
          window.removeEventListener("resize", changeWidth);
        };
    }, []);

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
  
    if (!isMounted) {
        return null;
    }

    return (
    <>
        <div
          className={clsx(
            "block cursor-pointer",
            screenWidth >= 1025 && "hidden"
          )}
          onClick={toggleNav}
        >
            <div className="flex items-center justify-between px-4 md:px-[40px] lg:px-10">
                <Link href="/" className="flex gap-x-2">
                    <Image src="/Logo.svg" alt="Duotono Logo" width={200} height={200}/>
                </Link>
                <Tally3 className="rotate-90 mt-2" width={30} height={30}/>
            </div>
        </div>

        {(toggleMenu && screenWidth < 1025) && (
            <div className="flex items-center justify-evenly">
                Menú desplegable // TODO
            </div>
        )}

        {(screenWidth > 1025) && (
            <div className="flex items-center justify-evenly">
                <div className="relative flex h-16 items-center">
                    <Link href="/" className="flex gap-x-2">
                        <Image src="/Logo.svg" alt="Duotono Logo" width={200} height={200}/>
                    </Link>
                </div>
                <SearchInput/>
                <nav className="mx-6 flex items-center space-x-4 lg:space-x-12">
                    {routes.map((route) => (
                        <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            'font-medium transition-colors hover:text-black',
                            pathname === route.href ? 'text-black' : 'text-black/60'
                        )}
                        >
                        {route.label}
                    </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-x-10">
                    <Link href="/contacto">
                        <Button variant="default" className="bg-first rounded-lg hover:bg-first/80 transition duration-200">
                            Te ayudamos
                        </Button>
                    </Link>
                    <Link href="/contacto">
                        <Button variant="default" className="bg-second rounded-lg flex items-center space-x-2 hover:bg-second/80 transition duration-200">
                            <ShoppingCart
                                fill="white"
                                size={20}
                                color="white"
                            />
                            <span className="text-white">3</span>
                        </Button>
                    </Link>
                </div>
            </div>
        )}
    </>
    )
}

export default Navbar