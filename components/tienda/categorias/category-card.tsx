import Image from "next/image";
import Link from "next/link";

interface Props {
    image: string,
    name: string,
    slug: string
    description: string
    price: number
    discountPrice: number
    subcategorySlug: string
}


const CollectionCard: React.FC<Props> = ({
    image,name,slug,description,price, discountPrice, subcategorySlug
}) => {

    const redirect = `/tienda/categorias/${slug}/${subcategorySlug}`
    
    return (
        <Link href={redirect}>
            <div className="flex flex-col space-y-2">
                <Image src={image} alt="" width={350} height={350} className="min-h-[350px] max-h-[350px]"/>
                <h4 className="font-bold text-lg">{name}</h4>
                <p className="text-black/70">{description ? description : "This is an example of how you can use the component as a variant. Click on the component and in the sidebar on the right you can see all the available options."}</p>
                <p className="text-black/70">1000 unidades por</p>
                <div className="flex space-x-4">
                    <span className="text-red-500">{price}€</span>
                    <span className="font-bold text-xl">{discountPrice}€</span>
                </div>
            </div>
        </Link>
    )
}


export default CollectionCard