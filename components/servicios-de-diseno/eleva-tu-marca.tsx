import Image from "next/image"
import { Button } from "../ui/button"

const ElevaTuMarca = () => {
    return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full place-items-center">
        <div className="mt-10 xl:my-20 mx-10 xl:mx-0 space-y-8">
            <h3 className="font-bold text-5xl xl:text-4xl max-w-2xl text-center xl:text-left">Duotono: Eleva Tu Marca con Branding Impactante</h3>
            <p className="text-black max-w-[600px] text-center xl:text-left">Construimos historias que resuenan. Destaca con un branding único que refleja tus valores y propósito.</p>
            <div className="flex items-center justify-center xl:justify-start space-x-6">
                <Button variant="default" className="bg-first rounded-xl gap-x-2 shrink-0 text-xs xl:text-base hover:bg-first/80 transition duration-200 p-8">Hablemos de tu marca</Button>
            </div>
        </div>
        <div className="my-20">
            <Image src="/10.png" alt="1" width={700} height={700} className="rounded-md"/>
        </div>
    </div>
    )
}

export default ElevaTuMarca