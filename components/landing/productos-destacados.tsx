import Image from "next/image"
import React from "react";
import { Carousel } from "../ui/carousel";

const ProductosDestacados = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-center space-y-10">
                <h2 className="font-bold text-5xl xl:text-7xl max-w-2xl text-center">Descubre nuestros productos</h2>
                <p className="text-black/80 max-w-[600px] text-center">Expertos en impresión digital de alta calidad. Convierte tus diseños en obras maestras con tecnología avanzada y servicio personalizado.</p>
            </div>
            <div className="hidden xl:grid grid-cols-5 place-items-center place-content-center w-full">
                    <div className="flex flex-col items-center justify-center">
                        <Image src="/2.png" alt="2" width={300} height={300}/>
                        <p className="font-semibold text-xl">Papelería y oficina</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image src="/2.png" alt="2" width={300} height={300}/>
                        <p className="font-semibold text-xl">Papelería y oficina</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image src="/2.png" alt="2" width={300} height={300}/>
                        <p className="font-semibold text-xl">Papelería y oficina</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image src="/2.png" alt="2" width={300} height={300}/>
                        <p className="font-semibold text-xl">Papelería y oficina</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image src="/2.png" alt="2" width={300} height={300}/>
                        <p className="font-semibold text-xl">Papelería y oficina</p>
                    </div>
            </div>
          <Carousel/>
        </>
    )
}

export default ProductosDestacados