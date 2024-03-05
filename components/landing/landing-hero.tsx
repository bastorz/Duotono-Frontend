import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from '../ui/carousel';

const LandingHero = () => {
  const slides = [
    {
      url: 'https://duotonodesign.s3.eu-west-3.amazonaws.com/flyers-a4.jpg',
    },
    {
      url: 'https://duotonodesign.s3.eu-west-3.amazonaws.com/bolsa+de+tela.jpg',
    },
    {
      url: 'https://duotonodesign.s3.eu-west-3.amazonaws.com/camisetas-deportivas-poliester.jpeg',
    },
    {
      url: 'https://duotonodesign.s3.eu-west-3.amazonaws.com/taza-con-caja.jpg',
    },
    {
      url: 'https://duotonodesign.s3.eu-west-3.amazonaws.com/tarjeta-de-visita.jpeg',
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full place-items-center">
      <div className="mt-10 xl:my-20 mx-10 xl:mx-0 space-y-8">
        <h1 className="font-bold text-5xl xl:text-7xl max-w-2xl text-center xl:text-left">
          Expande tu marca, crea tus productos
        </h1>
        <p className="text-black/80 max-w-[600px] text-center xl:text-left">
          Transforma tus ideas en impresos vívidos. Con tecnología de punta y
          expertos a tu servicio, hacemos realidad tu visión en Tenerife y el
          mundo.
        </p>
        <div className="flex items-center justify-center xl:justify-start space-x-6">
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
        <Carousel slides={[...slides]} />
      </div>
    </div>
  );
};

export default LandingHero;
