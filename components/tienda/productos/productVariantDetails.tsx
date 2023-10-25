'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/productVariantDetailsAccordion"
import { cn } from "@/lib/utils";
import { optionGroups } from "@/types/optionGroups-type";
import { Check, Pencil } from "lucide-react";
import { useState } from "react";



interface Props {
    optionGroups: optionGroups[]
}

const ProductVariantDetails: React.FC<Props> = ({optionGroups}) => {
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: { optionName: string; optionPrice: number } | null }>({});
    
    const handleCheckboxChange = (groupName: string, optionName: string, optionPrice: number) => {
        setSelectedOptions((prevSelectedOptions) => {
          if (prevSelectedOptions[groupName]?.optionName === optionName) {
            // Deselect if the same checkbox is clicked
            const updatedOptions = { ...prevSelectedOptions };
            updatedOptions[groupName] = null;
            return updatedOptions;
          } else {
            // Select the new checkbox
            const updatedOptions = { ...prevSelectedOptions };
            updatedOptions[groupName] = { optionName, optionPrice };
            console.log(updatedOptions)
            return updatedOptions;
          }
        });
        // Here you can set your data state as required
      };

    return (
        <>
            <div className="grid grid-cols-6 px-28 py-10">
                <div className="flex flex-col space-y-10 col-span-4">
                    {optionGroups.map((optionGroup, index) => (
                            <div key={optionGroup.name}>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1" className={cn("border border-black/60 mx-4", selectedOptions[optionGroup.name] ? "border-green-400" : "data-[state=open]:border-blue-300")}>
                                        <AccordionTrigger className="font-semibold text-lg mx-4 flex">
                                            <span className="px-2 rounded-full border border-black mr-4">{index + 1}</span>
                                            <div className="w-full text-left">{optionGroup.name}</div>
                                            {selectedOptions[optionGroup.name] ? (<Check className="text-green-500"/>) : (<Pencil className="w-5 h-5"/>)}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-black/60 text-lg mx-4 px-20">
                                        <div className="grid grid-cols-4 gap-y-4">
                                            {optionGroup.options.map((option) => (
                                                    <div key={option.name} className="col-span-1">
                                                        <input
                                                            type="checkbox"
                                                            className="mr-2 col-span-1"
                                                            checked={selectedOptions[optionGroup.name]?.optionName === option.name}
                                                            onChange={() => handleCheckboxChange(optionGroup.name, option.name, option.customFields.Price)}
                                                        />
                                                        <label htmlFor={`checkbox-${option.name}`}>{option.name}</label>
                                                    </div>
                                            ))}
                                        </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                    ))}
                </div>
                <div className="border border-black/20 col-span-2 rounded-xl p-10 max-h-[1000px]">
                    <h5 className="font-bold text-2xl">Resumen del producto</h5>
                    <div className="grid grid-cols-1 py-6 gap-y-10">
                        <div>
                        <button className="w-full text-end" >Cambiar</button>
                        <h6 className="text-black/70 text-xl pb-2">Personalización</h6>
                        <p className="text-black/70 pb-4"></p>
                        <div className="w-full bg-black h-[1px] opacity-40"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductVariantDetails