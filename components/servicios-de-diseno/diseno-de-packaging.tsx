import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Carousel } from '../ui/carousel';

const DisenoDePackaging = () => {
  const slides = [
    {
      url: '/carruseles/7/botella-madera-agenda.jpg',
    },
    {
      url: '/carruseles/7/Botellas.jpg',
    },
    {
      url: '/carruseles/7/cajas-tazas.jpg',
    },
    {
      url: '/carruseles/7/camisas-varias.jpg',
    },
    {
      url: '/carruseles/7/tazamujer.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full place-items-center">
      <div className="my-20 order-2 xl:order-1">
        <Carousel slides={[...slides]} dotColor={'black'} />
      </div>
      <div className="mt-10 xl:my-20 mx-10 xl:mx-0 space-y-8 order-1 xl:order-2">
        <h3 className="font-bold text-5xl xl:text-5xl max-w-2xl text-center xl:text-left">
          Diseño de Packaging: Deja Huella en Cada Producto
        </h3>
        <p className="text-black max-w-[600px] text-center xl:text-left xl:text-lg">
          Transformamos envases en experiencias. Captura la atención y el
          corazón de tus clientes.
        </p>
        <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start xl:space-x-6 space-y-6 xl:space-y-0 pb-10 xl:pb-0">
          <Link href="/contacto" target="_blank">
            <Button
              variant="default"
              className="bg-first rounded-xl gap-x-2 shrink-0 px-10 py-8"
            >
              Comienza tu proyecto
            </Button>
          </Link>
          <Link href="/contacto" target="_blank">
            <Button
              variant="ghost"
              className="rounded-xl border border-[#000000] px-16 py-8"
            >
              Ver portafolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisenoDePackaging;
