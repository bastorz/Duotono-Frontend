'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/productVariantDetailsAccordion"
import { useState } from "react";

const ProductVariantDetails = () => {
    const [designReady, setDesignReady] = useState('');
    const [selectSize, setSelectSize] = useState('');
    const [selectAspect, setSelectAspect] = useState('');
    const [selectMaterial, setSelectMaterial] = useState('');
    const [selectPrintOptions, setSelectPrintOptions] = useState('');
    const [selectQuantity, setSelectQuantity] = useState('');

    const handleDesignReadyChange = (value: string) => {
        setDesignReady(value);
      };

    const handleSelectSizeChange = (value: string) => {
        setSelectSize(value);
      };

    const handleSelectAspectChange = (value: string) => {
        setSelectAspect(value);
      };

    const handleSelectMaterialChange = (value: string) => {
        setSelectMaterial(value);
      };

    const handleSelectPrintOptionsChange = (value: string) => {
        setSelectPrintOptions(value);
      };
    const handleSelectQuantityChange = (value: string) => {
        setSelectQuantity(value);
      };

    return (
        <>
            <div className="flex flex-col space-y-4">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold text-lg mx-4 flex">
                            <span className="px-2 rounded-full border border-black mr-4">1</span>
                            ¿Cómo te gustaría personalizar tu pedido?
                        </AccordionTrigger>
                        <AccordionContent className="text-black/60 text-lg mx-4 border-b border-x border-black/60 px-20">
                        <div className="flex flex-col space-y-4">
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={designReady === "Ya tengo listo mi diseño"}
                                onChange={() => handleDesignReadyChange("Ya tengo listo mi diseño")}
                                className="mr-2"
                            />
                            Ya tengo listo mi diseño
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={designReady === "Necesito un nuevo diseño"}
                                onChange={() => handleDesignReadyChange("Necesito un nuevo diseño")}
                                className="mr-2"
                            />
                            Necesito un nuevo diseño
                            </label>
                        </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold text-lg mx-4 flex">
                            <span className="px-2 rounded-full border border-black mr-4">2</span>
                            Escoge el tamaño
                        </AccordionTrigger>
                        <AccordionContent className="text-black/60 text-lg mx-4 border-b border-x border-black/60 px-10">
                        <div className="grid grid-cols-4 place-items-center gap-y-4">
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectSize === "A6 105 X 148 mm"}
                                onChange={() => handleSelectSizeChange("A6 105 X 148 mm")}
                                className="mr-2"
                            />
                            A6 105 X 148 mm
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectSize === "A4 210 X 297 mm"}
                                onChange={() => handleSelectSizeChange("A4 210 X 297 mm")}
                                className="mr-2"
                            />
                            A4 210 X 297 mm
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectSize === "DL 99 x 210"}
                                onChange={() => handleSelectSizeChange("DL 99 x 210")}
                                className="mr-2"
                            />
                            DL 99 x 210
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectSize === "X-Long 105 x 297"}
                                onChange={() => handleSelectSizeChange("X-Long 105 x 297")}
                                className="mr-2"
                            />
                            X-Long 105 x 297
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectSize === "A5 148 X 210 mm"}
                                onChange={() => handleSelectSizeChange("A5 148 X 210 mm")}
                                className="mr-2"
                            />
                            A5 148 X 210 mm
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectSize === "A3 420 x 297 mm"}
                                onChange={() => handleSelectSizeChange("A3 420 x 297 mm")}
                                className="mr-2"
                            />
                            A3 420 x 297 mm
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectSize === "A7 75 x 105 mm"}
                                onChange={() => handleSelectSizeChange("A7 75 x 105 mm")}
                                className="mr-2"
                            />
                            A7 75 x 105 mm
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectSize === "A-Long 74 x 210 mm"}
                                onChange={() => handleSelectSizeChange("A-Long 74 x 210 mm")}
                                className="mr-2"
                            />
                            A-Long 74 x 210 mm
                            </label>
                        </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold text-lg mx-4 flex">
                            <span className="px-2 rounded-full border border-black mr-4">3</span>
                            Aspecto
                        </AccordionTrigger>
                        <AccordionContent className="text-black/60 text-lg mx-4 border-b border-x border-black/60 px-20">
                        <div className="grid grid-cols-2 w-60 gap-y-4">
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectAspect === "Brillo"}
                                onChange={() => handleSelectAspectChange("Brillo")}
                                className="mr-2"
                            />
                            Brillo
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectAspect === "Sin laminar"}
                                onChange={() => handleSelectAspectChange("Sin laminar")}
                                className="mr-2"
                            />
                            Sin laminar
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectAspect === "Mate"}
                                onChange={() => handleSelectAspectChange("Mate")}
                                className="mr-2"
                            />
                            Mate
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectAspect === "Reciclado"}
                                onChange={() => handleSelectAspectChange("Reciclado")}
                                className="mr-2"
                            />
                            Reciclado
                            </label>
                        </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold text-lg mx-4 flex">
                            <span className="px-2 rounded-full border border-black mr-4">4</span>
                            Material
                        </AccordionTrigger>
                        <AccordionContent className="text-black/60 text-lg mx-4 border-b border-x border-black/60 px-20">
                        <div className="grid grid-cols-2 w-[450px] gap-y-4">
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectMaterial === "Económico 135 gr."}
                                onChange={() => handleSelectMaterialChange("Económico 135 gr.")}
                                className="mr-2"
                            />
                            Económico 135 gr.
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectMaterial === "Premium 250 gr."}
                                onChange={() => handleSelectMaterialChange("Premium 250 gr.")}
                                className="mr-2"
                            />
                            Premium 250 gr.
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectMaterial === "Estándar 170 gr."}
                                onChange={() => handleSelectMaterialChange("Estándar 170 gr.")}
                                className="mr-2"
                            />
                            Estándar 170 gr.
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectMaterial === "Premium plus 350 gr."}
                                onChange={() => handleSelectMaterialChange("Premium plus 350 gr.")}
                                className="mr-2"
                            />
                            Premium plus 350 gr.
                            </label>
                        </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold text-lg mx-4 flex">
                            <span className="px-2 rounded-full border border-black mr-4">5</span>
                            Opciones de impresión
                        </AccordionTrigger>
                        <AccordionContent className="text-black/60 text-lg mx-4 border-b border-x border-black/60 px-20">
                        <div className="flex flex-col space-y-4">
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectPrintOptions === "Impresión a una cara"}
                                onChange={() => handleSelectPrintOptionsChange("Impresión a una cara")}
                                className="mr-2"
                            />
                            Impresión a una cara
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectPrintOptions === "Impresión a doble cara"}
                                onChange={() => handleSelectPrintOptionsChange("Impresión a doble cara")}
                                className="mr-2"
                            />
                            Impresión a doble cara
                            </label>
                        </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold text-lg mx-4 flex">
                            <span className="px-2 rounded-full border border-black mr-4">6</span>
                            Cantidad
                        </AccordionTrigger>
                        <AccordionContent className="text-black/60 text-lg mx-4 border-b border-x border-black/60 px-10">
                        <div className="grid grid-cols-3 px-10 gap-y-4">
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectQuantity === "25"}
                                onChange={() => handleSelectQuantityChange("25")}
                                className="mr-2"
                            />
                            25
                            <span className="line-through">41,55€</span>
                            <span>31,99€</span>
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectQuantity === "100"}
                                onChange={() => handleSelectQuantityChange("100")}
                                className="mr-2"
                            />
                            100
                            <span className="line-through">41,55€</span>
                            <span>31,99€</span>
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectQuantity === "250"}
                                onChange={() => handleSelectQuantityChange("250")}
                                className="mr-2"
                            />
                            250
                            <span className="line-through">41,55€</span>
                            <span>31,99€</span>
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectQuantity === "500"}
                                onChange={() => handleSelectQuantityChange("500")}
                                className="mr-2"
                            />
                            500
                            <span className="line-through">41,55€</span>
                            <span>31,99€</span>
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectQuantity === "1000"}
                                onChange={() => handleSelectQuantityChange("1000")}
                                className="mr-2"
                            />
                            1000
                            <span className="line-through">41,55€</span>
                            <span>31,99€</span>
                            </label>
                            <label className="flex space-x-10">
                            <input
                                type="checkbox"
                                checked={selectQuantity === "2000"}
                                onChange={() => handleSelectQuantityChange("2000")}
                                className="mr-2"
                            />
                            2000
                            <span className="line-through">41,55€</span>
                            <span>31,99€</span>
                            </label>
                        </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}

export default ProductVariantDetails