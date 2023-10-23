import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import productRoutes from "@/constants/routes"
import { cn } from "@/lib/utils"

import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const dropdownMenu = () => {
    const pathname = usePathname();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex space-x-2 items-center">
                <p>Productos</p>
                <ChevronDown className="w-4"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {productRoutes.map((route) => (
                    <DropdownMenuItem key={route.href}>
                        <Link href={route.href} className={cn('font-medium transition-colors hover:text-black',
                        pathname === route.href ? 'text-black' : 'text-black/60'
                    )}>{route.label}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default dropdownMenu