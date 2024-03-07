import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from '../ui/carousel';

const LandingHero = () => {
  const slides = [
    {
      url: '/carruseles/1/bolsa-de-tela.jpg',
    },
    {
      url: '/carruseles/1/camisa-chico.jpg',
    },
    {
      url: '/carruseles/1/empaque-combo.jpg',
    },
    {
      url: '/carruseles/1/rollup.jpg',
    },
    {
      url: '/carruseles/1/taza-galeon.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full place-items-center">
      <div className="mt-10 xl:my-20 mx-10 xl:mx-0 space-y-8">
        <h1 className="font-bold text-5xl xl:text-7xl max-w-2xl text-center xl:text-left">
          Expande tu marca, crea tus productos
        </h1>
        <p className="text-black/80 lg:max-w-[600px] text-center xl:text-left">
          Transforma tus ideas en impresos vívidos. Con tecnología de punta y
          expertos a tu servicio, hacemos realidad tu visión en Tenerife y el
          mundo.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center xl:justify-start space-y-4 lg:space-y-0 lg:space-x-6">
          <Link href="/tienda">
            <Button
              variant="default"
              className="bg-first rounded-xl gap-x-2 shrink-0   "
            >
              Ver productos
              <ArrowRight className="w-4 xl:w-6" />
            </Button>
          </Link>
          <Link href="/contacto" target="_blank">
            <Button
              variant="ghost"
              className="rounded-xl border border-[#000000]"
            >
              Solicita tu impresión
            </Button>
          </Link>
        </div>
      </div>
      <div className="my-20">
        <Carousel slides={[...slides]} dotColor={'black'} />
      </div>
    </div>
  );
};

export default LandingHero;
