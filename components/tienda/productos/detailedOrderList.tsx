import { Button } from "@/components/ui/button";
import { formatter } from "@/lib/utils";
import { group } from "console";
import { format } from "path";
import { useState } from "react";

interface SelectedOptions {
    [key: string]: { optionName: string; optionPrice: number } | null;
  }

interface Props {
    groupNames: string[]
    selectedOptions: SelectedOptions
    productPrice: number
}

const DetailedOrderList:React.FC<Props> = ({selectedOptions, groupNames, productPrice}) => {

    const priceArray: number[] = []
    groupNames.forEach((groupName) => {
        const price = selectedOptions[groupName]?.optionPrice;
        priceArray.push(price || 0); 
    });

    const extraPrice = priceArray.reduce((total, currentPrice) => total + currentPrice, 0)
    const rawTotalPrice = Number(productPrice) + Number(extraPrice)
    const taxes = (21 / 100) * (rawTotalPrice)
    const rawTotalPriceOutOfTaxes = Number(rawTotalPrice) - Number(taxes)

    const totalPrice = formatter.format(rawTotalPrice / 100) 
    const totalPriceOutOfTaxes = formatter.format(rawTotalPriceOutOfTaxes / 100)


    return (
        <div className="border border-black/20 col-span-2 rounded-xl p-10">
            <h5 className="font-bold text-2xl">Resumen del producto</h5>
            {groupNames.map((groupName) => (
                <div className="grid grid-cols-1 py-6 gap-y-10">
                    <div>
                        <button className="w-full text-end text-lg">Cambiar</button>
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
                <Button variant="defaultBlack" className="mt-10 text-lg">Pedir ahora</Button>
            </div>
         </div>
    )
}

export default DetailedOrderList