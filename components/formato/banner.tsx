import Link from "next/link"
import { Button } from "../ui/button"

const Banner = () => {
    return (
        <div className="py-10 px-0 xl:px-32 grid grid-cols-1 md:grid-cols-2 h-[500px]">
            <div className="xl:rounded-lg bg-first flex flex-col items-center justify-center w-full space-y-8">
                <h5 className="font-bold text-xl md:text-2xl xl:text-5xl max-w-[450px] text-center xl:text-left">Los tamaños y formatos que necesitas</h5>
                <div className="flex space-x-4 xl:mr-32">
                    <Link href="/tienda" target="_blank">
                        <Button className="rounded-xl shrink-0 p-6" variant='defaultBlack'>Ver productos</Button>
                    </Link>
                    <Link href="/contacto" target="_blank">
                        <Button className="bg-first rounded-xl shrink-0 p-6 border border-black">Necesito ayuda</Button>
                    </Link>
                </div>
            </div>
            <div style={{
                backgroundImage: 'url(/11.png)',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
                }}  
                className="object-center object-cover py-10 xl:py-0">
            </div>
        </div>
    )
}

export default Banner