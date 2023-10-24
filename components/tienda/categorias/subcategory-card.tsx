import Image from "next/image";
import Link from "next/link";

interface Props {
    image: string,
    name: string,
    description: string
    price: number
    discountPrice: number
    productSlug: string
}


const SubcategoryCard: React.FC<Props> = ({
    image,name,description,price,discountPrice, productSlug
}) => {

    const redirect = `/tienda/productos/${productSlug}`
    
    return (
        <Link href={redirect}>
            <div className="flex flex-col space-y-4">
                <Image src={image} alt="" width={450} height={350} className="min-h-[350px]"/>
                <h4 className="font-bold text-xl">{name}</h4>
                <p className="text-black/70 max-w-[350px]">{description}</p>
                <p className="text-black/70 pt-4">1000 unidades por</p>
                <div className="flex space-x-2">
                    <span className="text-red-500 line-through">{price}€</span>
                    <span className="font-bold text-2xl">{discountPrice}€</span>
                </div>
            </div>
        </Link>
    )
}


export default SubcategoryCard