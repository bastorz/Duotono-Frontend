import { ArrowRight, BadgeCheck } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const PorqueNosotros = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full place-items-center bg-black px-0 xl:px-10 2xl:px-40">
      <div className="my-0 xl:my-20">
        <Image
          src="/3.png"
          alt="1"
          width={700}
          height={700}
          className="bg-white xl:bg-black w-[1100px] xl:w-[700px]"
        />
      </div>
      <div className="flex flex-col space-y-10 items-center xl:items-start h-full py-20">
        <h2 className="font-bold text-5xl xl:text-5xl text-center text-white">
          ¿Por qué nosotros?
        </h2>
        <p className="text-black/80 max-w-[600px] text-center xl:text-left text-white px-4 xl:px-0">
          Imprenta digital de vanguardia. Calidad, rapidez y atención
          personalizada que marcan la diferencia.
        </p>
        <div className="flex flex-col xl:flex-row items-center space-y-4 xl:space-y-0 px-4 xl:px-0 ml-2 py-4">
          <BadgeCheck color="white" className="w-10 h-10 mr-4" />
          <p className="text-white max-w-lg text-center xl:text-left">
            Duotono ofrece soluciones personalizadas: Cada proyecto es único, y
            nuestra tecnología permite adaptaciones específicas para cada
            cliente.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row items-center space-y-4 xl:space-y-0 px-4 xl:px-0 ml-2 py-4">
          <BadgeCheck color="white" className="w-10 h-10 mr-4" />
          <p className="text-white max-w-lg text-center xl:text-left">
            La innovación es nuestro sello: Duotono se mantiene a la vanguardia
            en técnicas y materiales, asegurando resultados que sobrepasan
            expectativas.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row items-center space-y-4 xl:space-y-0 px-4 xl:px-0 ml-2 py-4">
          <BadgeCheck color="white" className="w-10 h-10 mr-4" />
          <p className="text-white max-w-lg text-center xl:text-left">
            Asesoramiento experto en diseño: Más allá de la impresión, Duotono
            te brinda consultoría para maximizar el impacto visual de tus
            archivos.
          </p>
        </div>
        <div className="flex items-center justify-center xl:justify-start space-x-6 w-full">
          <Link href="/tienda">
            <Button
              variant="default"
              className="bg-first rounded-xl gap-x-2 shrink-0 text-xs xl:text-base "
            >
              Ver productos
              <ArrowRight className="w-4 xl:w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PorqueNosotros;
