import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";

export const ProductPageBanner = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full place-items-center bg-first">
            <div className="mt-10 xl:my-20 mx-10 xl:mx-0 space-y-8">
                <h3 className="font-bold text-5xl xl:text-4xl max-w-2xl text-center xl:text-left">Te ayudamos con tu impresión digital para expandir tu marca</h3>
                <p className="text-black max-w-[600px] text-center xl:text-left">Eleva tu marca con la más alta calidad en impresión digital. Precisión, rapidez y confiabilidad. ¡Haz que tu proyecto destaque!</p>
                <div className="flex items-center justify-center xl:justify-start space-x-6">
                    <Link href="/contacto">
                        <Button variant="defaultBlack" className="rounded-xl gap-x-2 shrink-0 text-xs xl:text-base">Contactar</Button>
                    </Link>
                    <Link href="/contacto" target="_blank"><Button variant="default" className="bg-white rounded-xl gap-x-2 shrink-0 text-xs xl:text-base ">Solicitar cotización</Button></Link>
                </div>
            </div>
            <div className="mt-20 xl:my-20">
                <Image src="/20.svg" alt="1" width={700} height={700} className="rounded-md"/>
            </div>
        </div>
    )
}