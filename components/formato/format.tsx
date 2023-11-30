import { formats } from "@/constants/formats"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"

const Format = () => {
    return (
        <div className="px-10 xl:px-32 xl:py-10">
        {formats.map((format, i) => (
        <div className="pb-10" key={i}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 pb-10 text-center xl:text-left" key={format.name}>
                <h5 className="font-bold text-2xl">{format.item.title}</h5>
                <div></div>
                <p className="text-black/70 max-w-xl pb-6 xl:pb-0">{format.item.subtitle}</p>
                <div className="flex items-center justify-center xl:justify-end">
                    <Link href="/contacto" target="_blank">
                        <Button className="bg-slate-200">
                            Consultar por más formatos
                            <ArrowRight className="ml-2"/>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 place-items-center gap-y-10 gap-x-2 xl:gap-x-0">
                {format.item.images.map((image) => (
                    <div key={image.name} className="py-3 px-1 border border-black/30 rounded-xl h-full">
                        <Image src={image.url} alt={image.name} width={200} height={200} />
                        <p className="font-semibold text-center max-w-[200px]">{image.name}</p>
                    </div>
                ))}
            </div>
        </div>
        ))}
    </div>
    )
}

export default Format