'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/productVariantDetailsAccordion"
import { cn, formatCurrency } from "@/lib/utils";
import { optionGroups } from "@/types/optionGroups-type";
import { Check, Pencil } from "lucide-react";
import { useState } from "react";
import DetailedOrderList from "./detailedOrderList";

interface Props {
    optionGroups: optionGroups[]
    productPrice: number
    variantId: string
}

const ProductVariantDetails: React.FC<Props> = ({optionGroups, productPrice, variantId}) => {
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: { optionName: string; optionPrice: number } | null }>({});
    const groupName = optionGroups.map((optionGroup) => optionGroup.name)
    
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
            return updatedOptions;
          }
        });
      };

      // Function to clear selected options for a specific option from the child.
      const clearSelectedOptions = (groupName: string) => {
        setSelectedOptions((prevSelectedOptions) => {
          const updatedOptions = { ...prevSelectedOptions };
          updatedOptions[groupName] = null;
          return updatedOptions;
        });
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
                                        <div className="grid grid-cols-8 gap-y-4">
                                            {optionGroup.options.map((option) => (
                                                    <div key={option.name} className="col-span-3">
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
                <DetailedOrderList groupNames={groupName} selectedOptions={selectedOptions} productPrice={productPrice} variantId={variantId} clearSelectedOptions={clearSelectedOptions}/>
            </div>
        </>
    )
}

export default ProductVariantDetails


// EJEMPLO DE COMO SERÍA CON ICONOS.


// {optionGroup.options.map((option) => (
//   <div key={option.name} className="col-span-3">
//       {option.name === "A6 105 X 148 mm" ? (
//             <button onClick={() =>
//               handleCheckboxChange(
//                   optionGroup.name,
//                   option.name,
//                   option.customFields.Price
//               )}>
//             <img src="/1.png" alt="Test Image" /></button>
//       ) : option.name === "A4 210 x 297 mm" ? (
//           <button onClick={() =>
//             handleCheckboxChange(
//                 optionGroup.name,
//                 option.name,
//                 option.customFields.Price
//             )}>
//           <img src="/2.png" alt="Test Image" /></button>
//        ) : 
//        (
//           <>
//                 <input
//                     type="checkbox"
//                     className="mr-2 col-span-1"
//                     checked={selectedOptions[optionGroup.name]?.optionName === option.name}
//                     onChange={() =>
//                         handleCheckboxChange(
//                             optionGroup.name,
//                             option.name,
//                             option.customFields.Price
//                         )
//                     }
//                 />
//                 <label htmlFor={`checkbox-${option.name}`}>
//                     {option.name === "A6 105 X 148 mm" ? "" : option.name}
//                 </label>
//           </>
//         )}
//     </div>
// ))}