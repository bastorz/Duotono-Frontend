import Image from "next/image"
import Link from "next/link";
import {Twitter, Instagram, Linkedin} from "lucide-react"
import { Button } from "../ui/button";

const ConoceNuestroEquipo = () => {

const teamLogos = [
    {
        label: "Twitter",
        icon: <Twitter fill="#000000"/>,
        href: "/"
    },
    {
        label: "Instagram",
        icon: <Instagram />,
        href: "/"
    },
    {
        label: "Linkedin",
        icon: <Linkedin fill="#000000"/>,
        href: "/"
    },
]


    return (
    <div className="flex flex-col items-center justify-center space-y-6 py-20 px-4 xl:px-0">
        <p className="font-semibold text-lg text-center xl:text-left">Nosotras estamos aquí!</p>
        <h3 className="text-5xl font-bold pb-4 text-center xl:text-left">Conoce a nuestro equipo</h3>
        <p className="text-xl text-[#000000] text-center max-w-3xl">Nuestra filosofía es simple: contratar un equipo diverso y apasionado y fomentar una cultura que te empodere para hacer tu mejor trabajo.</p>
        <div className="flex flex-col xl:flex-row space-y-8 xl:space-y-0 space-x-0 xl:space-x-6 items-center justify-center xl:justify-start ">
            <Button variant="ghost" className="rounded-xl gap-x-2 shrink-0 text-xs xl:text-base hover:bg-slate-100 transition duration-200 p-8 border border-black">Conoce nuestros servicios</Button>
            <Button variant="default" className="bg-first rounded-xl gap-x-2 shrink-0 text-xs xl:text-base hover:bg-first/80 transition duration-200 p-8">
                Te ayudamos 
            </Button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 place-items-center place-content-center gap-x-20 py-8 gap-y-10 xl:gap-y-0">
            <div className="bg-[#AEAEAE]/10 flex flex-col items-center justify-center py-10 px-8 rounded-xl space-y-2">
                <Image src="/7.svg" alt="19" width={70} height={70} className="bg-[#ffffff] rounded-full"/>
                <h5 className="font-bold">Olivia Rhye</h5>
                <h6 className="font-bold">Founder & CEO</h6>
                <p className="max-w-[200px] text-center">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
                <div className="flex space-x-4 pt-4">
                    {teamLogos.map((logo) => (
                        <Link key={logo.label} href={logo.href} className="w-5 h-5 rounded-xl flex items-center justify-center">
                            {logo.icon}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="bg-[#AEAEAE]/10 flex flex-col items-center justify-center py-10 px-8 rounded-xl space-y-2">
                <Image src="/7.svg" alt="19" width={70} height={70} className="bg-[#ffffff] rounded-full"/>
                <h5 className="font-bold">Olivia Rhye</h5>
                <h6 className="font-bold">Founder & CEO</h6>
                <p className="max-w-[200px] text-center">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
                <div className="flex space-x-4 pt-4">
                    {teamLogos.map((logo) => (
                        <Link key={logo.label} href={logo.href} className="w-5 h-5 rounded-xl flex items-center justify-center">
                            {logo.icon}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="bg-[#AEAEAE]/10 flex flex-col items-center justify-center py-10 px-8 rounded-xl space-y-2">
                <Image src="/7.svg" alt="19" width={70} height={70} className="bg-[#ffffff] rounded-full"/>
                <h5 className="font-bold">Olivia Rhye</h5>
                <h6 className="font-bold">Founder & CEO</h6>
                <p className="max-w-[200px] text-center">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
                <div className="flex space-x-4 pt-4">
                    {teamLogos.map((logo) => (
                        <Link key={logo.label} href={logo.href} className="w-5 h-5 rounded-xl flex items-center justify-center">
                            {logo.icon}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="bg-[#AEAEAE]/10 flex flex-col items-center justify-center py-10 px-8 rounded-xl space-y-2">
                <Image src="/7.svg" alt="19" width={70} height={70} className="bg-[#ffffff] rounded-full"/>
                <h5 className="font-bold">Olivia Rhye</h5>
                <h6 className="font-bold">Founder & CEO</h6>
                <p className="max-w-[200px] text-center">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
                <div className="flex space-x-4 pt-4">
                    {teamLogos.map((logo) => (
                        <Link key={logo.label} href={logo.href} className="w-5 h-5 rounded-xl flex items-center justify-center">
                            {logo.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
}
export default ConoceNuestroEquipo