import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Carousel } from '../ui/carousel';
const ConquistaElMundo = () => {
  const slides = [
    {
      url: '/carruseles/6/COMBO1.jpg',
    },
    {
      url: '/carruseles/6/combo3.jpg',
    },
    {
      url: '/carruseles/6/franela-hombre.jpg',
    },
    {
      url: '/carruseles/6/tarjeta-visita-3.jpg',
    },
    {
      url: '/carruseles/6/tickeras.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full place-items-center">
      <div className="mt-10 mx-10 xl:mx-0 space-y-8">
        <h3 className="font-bold text-5xl xl:text-5xl max-w-2xl text-center xl:text-left">
          Conquista el Mundo Digital con Duotono
        </h3>
        <p className="text-black max-w-[600px] text-center xl:text-left xl:text-lg">
          Estrategias digitales que captan y convierten. Aumenta tu presencia y
          resultados en línea.
        </p>
        <div className="flex items-center justify-center xl:justify-start space-x-6">
          <Link href="/contacto" target="_blank">
            <Button
              variant="defaultBlack"
              className="rounded-xl gap-x-2 shrink-0   px-12 py-8"
            >
              Empieza tu campaña
            </Button>
          </Link>
        </div>
      </div>
      <div className="">
        <Carousel slides={[...slides]} dotColor={'black'} />
      </div>
    </div>
  );
};

export default ConquistaElMundo;
