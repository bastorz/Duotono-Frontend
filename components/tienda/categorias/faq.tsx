import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FAQ = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="flex flex-col space-y-4">
                <h4 className="font-bold text-3xl text-center">Preguntas frecuentes</h4>
                <p className="text-xl text-black/60">Encuentra respuestas rápidas a las inquietudes más comunes que nuestros clientes tienen. Estamos aquí para ayudarte en cada paso del camino.</p>
            </div>
            <div className="w-full p-20">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold text-lg mx-4">¿Qué tipo de archivos debo enviar para la impresión digital?</AccordionTrigger>
                        <AccordionContent className="text-black/60 text-lg mx-4">
                        Para garantizar una impresión de alta calidad, recomendamos enviar archivos en formato PDF con una resolución de al menos 300 DPI. También aceptamos otros formatos como JPEG, TIFF, y PSD. Asegúrate de que tus archivos estén bien diseñados y listos para imprimir para evitar demoras o problemas de calidad.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold text-lg mx-4">¿Qué tipo de archivos debo enviar para la impresión digital?</AccordionTrigger>
                        <AccordionContent className="text-black/60 text-lg mx-4">
                        Para garantizar una impresión de alta calidad, recomendamos enviar archivos en formato PDF con una resolución de al menos 300 DPI. También aceptamos otros formatos como JPEG, TIFF, y PSD. Asegúrate de que tus archivos estén bien diseñados y listos para imprimir para evitar demoras o problemas de calidad.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold text-lg mx-4">¿Qué tipo de archivos debo enviar para la impresión digital?</AccordionTrigger>
                        <AccordionContent className="text-black/60 text-lg mx-4">
                        Para garantizar una impresión de alta calidad, recomendamos enviar archivos en formato PDF con una resolución de al menos 300 DPI. También aceptamos otros formatos como JPEG, TIFF, y PSD. Asegúrate de que tus archivos estén bien diseñados y listos para imprimir para evitar demoras o problemas de calidad.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default FAQ