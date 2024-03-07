import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Carousel } from '../ui/carousel';

const TeAyudamos = () => {
  const slides = [
    {
      url: '/carruseles/3/botellas-750ml.jpg',
    },
    {
      url: '/carruseles/3/calendarios-mesa-simple.jpg',
    },
    {
      url: '/carruseles/3/chapas.jpg',
    },
    {
      url: '/carruseles/3/sudaderas-retiro.jpg',
    },
    {
      url: '/carruseles/3/TDV.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full place-items-center">
      <div className="mt-10 xl:my-20 mx-10 xl:mx-0 space-y-8">
        <h1 className="font-bold text-5xl xl:text-7xl xl:max-w-2xl text-center xl:text-left lg:px-40 xl:px-0">
          Te ayudamos con tu impresión digital
        </h1>
        <p className="text-black/80 xl:max-w-[600px] text-center xl:text-left lg:px-40 xl:px-0">
          Eleva tu marca con la más alta calidad en impresión digital.
          Precisión, rapidez y confiabilidad. ¡Haz que tu proyecto destaque!
        </p>
        <div className="flex flex-col xl:flex-row items-center justify-center md:justify-start space-y-4 xl:space-y-0 xl:space-x-6">
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
              Solicitar presupuesto
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-20 mb-0 xl:my-20 w-full xl:w-auto flex items-center justify-center">
        <Carousel slides={[...slides]} dotColor={'black'} />
      </div>
    </div>
  );
};

export default TeAyudamos;
