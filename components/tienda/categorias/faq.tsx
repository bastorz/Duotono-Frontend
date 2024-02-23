import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="flex flex-col space-y-4">
        <h4 className="font-bold text-3xl text-center">Preguntas frecuentes</h4>
        <p className="text-xl text-black/60">
          Encuentra respuestas rápidas a las inquietudes más comunes que
          nuestros clientes tienen. Estamos aquí para ayudarte en cada paso del
          camino.
        </p>
      </div>
      <div className="w-full p-20">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-semibold text-lg mx-4">
              ¿Qué tipo de archivos debo enviar para la impresión digital?
            </AccordionTrigger>
            <AccordionContent className="text-black/60 text-lg mx-4">
              Para garantizar una impresión de alta calidad, recomendamos enviar
              archivos en formato PDF con una resolución de al menos 300 DPI.
              También aceptamos otros formatos como JPEG, TIFF, y PSD. Asegúrate
              de que tus archivos estén bien diseñados y listos para imprimir
              para evitar demoras o problemas de calidad.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold text-lg mx-4">
              ¿Puedo solicitar una muestra antes de realizar un pedido grande?
            </AccordionTrigger>
            <AccordionContent className="text-black/60 text-lg mx-4">
              ¡Por supuesto! Estamos encantados de ofrecerte muestras antes de
              que realices un pedido grande. Entendemos la importancia de la
              calidad y la satisfacción del cliente. Solicitar una muestra te
              brinda la oportunidad de evaluar nuestros productos y asegurarte
              de que cumplen con tus expectativas antes de comprometerte con un
              pedido a gran escala.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-semibold text-lg mx-4">
              ¿Qué tipos de servicios de impresión digital ofrecen?
            </AccordionTrigger>
            <AccordionContent className="text-black/60 text-lg mx-4">
              Ofrecemos una gama versátil de servicios de impresión digital
              centrados en potenciar tu marca y presencia empresarial. Desde el
              branding hasta la imagen corporativa, cubrimos tus necesidades.
              Nuestro enfoque abarca el diseño de redes sociales para una
              interacción impactante con tu audiencia, junto con soluciones de
              packaging innovadoras que realzan la experiencia del cliente. Con
              atención meticulosa a los detalles, garantizamos que tu marca se
              destaque en todos los aspectos visuales y tangibles.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
