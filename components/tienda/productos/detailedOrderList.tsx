import { Button } from "@/components/ui/button";
import { getClient } from "@/lib/client";
import { formatCurrency} from "@/lib/utils";
import { AddItemToOrder } from "@/queries/add-item-to-cart.mutation";
import axios from "axios";
import { error } from "console";
import { redirect } from "next/navigation";

interface SelectedOptions {
    [key: string]: { optionName: string; optionPrice: number } | null;
}

interface Props {
    groupNames: string[]
    selectedOptions: SelectedOptions
    productPrice: number
    variantId: string
    clearSelectedOptions: (groupName: string) => void;
}

const DetailedOrderList:React.FC<Props> = ({selectedOptions, groupNames, productPrice, variantId, clearSelectedOptions}) => {

    const priceArray: number[] = []
    groupNames.forEach((groupName) => {
        const price = selectedOptions[groupName]?.optionPrice;
        priceArray.push(price || 0); 
    });

    const taxes = (21 / 100) * (productPrice)
    const rawTotalPriceOutOfTaxes = Number(productPrice) - Number(taxes)
    const totalPrice = formatCurrency(productPrice) 
    const totalPriceOutOfTaxes = formatCurrency(rawTotalPriceOutOfTaxes)

    const handleAddItemToOrder = async () => {
      try {
        const response = await axios.post('/api/addItemToCart', {totalPrice: totalPrice, variantId: variantId[0], quantity: 1 });
        redirect("/tienda/resumen-de-compra")
      } catch (error) {
        console.error("An error occurred: ", error)
      }
    }

    return (
        <div className="border border-black/20 col-span-2 rounded-xl p-10">
            <h5 className="font-bold text-2xl">Resumen del producto</h5>
            {groupNames.map((groupName, i) => (
                <div className="grid grid-cols-1 py-6 gap-y-10" key={i}>
                    <div>
                        <button onClick={() => clearSelectedOptions(groupName)} className="w-full text-end text-lg">Cambiar</button>
                        <h6 className="text-black/70 text-xl pb-2">{groupName}</h6>
                            {selectedOptions[groupName]?.optionName}
                        <p className="text-black/70 pb-4"></p>
                        <div className="w-full bg-black h-[1px] opacity-40"/>
                    </div>
                </div>
            ))}
            <div className="flex flex-col py-2">
                <h6 className="text-black/70 text-xl pb-2 ">Precio final</h6>
                <div className=""></div>
                <p className="text-end text-xl font-semibold">IVA EXCL. {totalPriceOutOfTaxes}</p>
                <p className="text-end text-xl font-semibold">IVA INCL. {totalPrice}</p>
                <Button variant="defaultBlack" className="mt-10 text-lg" onClick={handleAddItemToOrder}>Pedir ahora</Button>
            </div>
         </div>
    )
}

export default DetailedOrderList

