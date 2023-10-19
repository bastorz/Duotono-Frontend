import Link from "next/link";
import Image from 'next/image'
import {Facebook, Twitter, Instagram, Linkedin, Youtube} from "lucide-react"

const Footer = () => {

    const logos = [
        {
            label: "Facebook",
            icon: <Facebook fill="#000000"/>,
            href: "/"
        },
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
        {
            label: "Youtube",
            icon: <Youtube />,
            href: "/"
        }
    ]


    return (
       <div className="w-full pt-20 pb-10 px-8 xl:px-20 bg-black">
            <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-5 place-items-center xl:place-items-start">
                <div className="flex flex-col gap-y-10">
                    <Link href="/" className="">
                        <h3 className="text-white text-4xl text-center xl:text-left">Duotono Design</h3>
                    </Link>
                    <p className="text-white xl:text-left text-lg text-center">¡Resalta con duotono! Expande tu marca gracias a la impresión digital.</p>
                    <div className="flex space-x-3 items-center justify-center xl:justify-start">
                        {logos.map((logo) => (
                            <Link key={logo.label} href={logo.href} className="bg-first w-10 h-10 rounded-xl flex items-center justify-center">
                                {logo.icon}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col xl:items-start items-center space-y-2 ml-0 xl:ml-40 mt-10 mb-6 xl:my-0">
                    <h4 className="text-white text-xl font-semibold mb-2 xl:mb-5">Productos</h4>
                    <p className="text-white">Papelería y oficina</p>
                    <p className="text-white">Publicidad y exterior</p>
                    <p className="text-white">Ropa y accesorios</p>
                    <p className="text-white">Decoración y regalos</p>
                    <p className="text-white">Empaques</p>
                </div>
                <div className="flex flex-col xl:items-start items-center space-y-2 ml-0 xl:ml-40 mt-10 mb-6 xl:my-0">
                    <h4 className="text-white text-xl font-semibold mb-2 xl:mb-5">Nuestros servicios</h4>
                    <p className="text-white">Impresión digital</p>
                    <p className="text-white">Branding</p>
                    <p className="text-white">Imagen corporativa</p>
                    <p className="text-white">Diseño redes sociales</p>
                </div>
                <div className="flex flex-col xl:items-start items-center space-y-2 ml-0 xl:ml-40 mt-10 mb-6 xl:my-0">
                    <h4 className="text-white text-xl font-semibold mb-2 xl:mb-5">Duotono</h4>
                    <p className="text-white">Sobre nosotros</p>
                    <p className="text-white">Contáctanos</p>
                    <p className="text-white">Ubicación</p>
                </div>
                <div className="flex flex-col xl:items-start items-center space-y-2 ml-0 xl:ml-40 mt-10 mb-6 xl:my-0">
                    <h4 className="text-white text-xl font-semibold mb-2 xl:mb-5">Soporte</h4>
                    <p className="text-white">Preguntas frecuentes</p>
                    <p className="text-white">Centro de ayuda</p>
                </div>
            </div>
            <div className="flex flex-col space-y-10 mt-20 mx-0 xl:mx-20">
                <div className="w-full h-[1px] bg-terciary"></div>
                <p className="text-white text-lg text-center">Copyright © 2023 duotono | Todos los derechos reservados</p>
            </div>
       </div>
    )
}

export default Footer