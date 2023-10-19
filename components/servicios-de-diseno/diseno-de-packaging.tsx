import Image from "next/image"
import { Button } from "../ui/button"

const DisenoDePackaging = () => {
    return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full place-items-center">
        <div className="my-20 order-2 xl:order-1">
            <Image src="/14.png" alt="1" width={700} height={700} className="rounded-md"/>
        </div>
        <div className="mt-10 xl:my-20 mx-10 xl:mx-0 space-y-8 order-1 xl:order-2">
            <h3 className="font-bold text-5xl xl:text-4xl max-w-2xl text-center xl:text-left">Diseño de Packaging: Deja Huella en Cada Producto</h3>
            <p className="text-black max-w-[600px] text-center xl:text-left">Transformamos envases en experiencias. Captura la atención y el corazón de tus clientes.</p>
            <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start xl:space-x-6 space-y-6 xl:space-y-0 pb-10 xl:pb-0">
                <Button variant="default" className="bg-first rounded-xl gap-x-2 shrink-0 text-xs xl:text-base hover:bg-first/80 transition duration-200 p-8">
                    Comienza tu Proyecto
                </Button>
                <Button variant="ghost" className="rounded-xl hover:bg-fourth transition duration-200 border border-[#000000] py-[30px] px-12">Ver Portafolio</Button>
            </div>
        </div>
    </div>
    )
}

export default DisenoDePackaging