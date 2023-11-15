import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

const ConquistaElMundo = () => {
    return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full place-items-center">
        <div className="mt-10 xl:my-20 mx-10 xl:mx-0 space-y-8">
            <h3 className="font-bold text-5xl xl:text-5xl max-w-2xl text-center xl:text-left">Conquista el Mundo Digital con Duotono</h3>
            <p className="text-black max-w-[600px] text-center xl:text-left xl:text-lg">Estrategias digitales que captan y convierten. Aumenta tu presencia y resultados en línea.</p>
            <div className="flex items-center justify-center xl:justify-start space-x-6">
                <Link href="/contacto" target="_blank"><Button variant="default" className="bg-first rounded-xl gap-x-2 shrink-0 text-xs xl:text-base">Empieza tu campaña</Button></Link>
            </div>
        </div>
        <div className="my-20">
            <Image src="/15.png" alt="1" width={700} height={700} className="rounded-md"/>
        </div>
    </div>
    )
}

export default ConquistaElMundo