import { Subcollection } from "@/types/collections-type"
import Image from "next/image";
import Link from "next/link";

interface Props {
    image: string,
    name: string,
    slug: string
    description: string
    price: number
    discountPrice: number
}


const CategoryCard: React.FC<Props> = ({
    image,name,slug,description,price, discountPrice
}) => {

    const redirect = `/tienda/categorias/${slug}`
    return (
        <Link href={redirect}>
            <div className="flex flex-col space-y-2">
                <Image src={image} alt="" width={300} height={300} className="max-h-[400px] min-h-[400px]"/>
                <h4 className="font-bold text-lg">{name}</h4>
                <p className="text-black/70">{description}</p>
                <p className="text-black/70">1000 unidades por</p>
                <div className="flex space-x-4">
                    <span className="text-red-500">{price}€</span>
                    <span className="font-bold text-xl">{discountPrice}€</span>
                </div>
            </div>
        </Link>
    )
}


export default CategoryCard