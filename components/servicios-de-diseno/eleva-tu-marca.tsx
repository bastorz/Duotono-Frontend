import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Carousel } from '../ui/carousel';

const ElevaTuMarca = () => {
  const slides = [
    {
      url: '/carruseles/4/combo1.jpg',
    },
    {
      url: '/carruseles/4/furgo.jpg',
    },
    {
      url: '/carruseles/4/gorras2.jpg',
    },
    {
      url: '/carruseles/4/tarjetas-especiales.jpg',
    },
    {
      url: '/carruseles/4/triptico-A4.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full place-items-center">
      <div className="mt-10 xl:my-20 mx-10 xl:mx-0 space-y-8">
        <h3 className="font-bold text-5xl xl:text-5xl max-w-2xl text-center xl:text-left">
          Duotono: Eleva Tu Marca con Branding Impactante
        </h3>
        <p className="text-black max-w-[600px] text-center xl:text-left xl:text-lg">
          Construimos historias que resuenan. Destaca con un branding único que
          refleja tus valores y propósito.
        </p>
        <div className="flex items-center justify-center xl:justify-start space-x-6">
          <Link href="/contacto" target="_blank">
            {' '}
            <Button
              variant="defaultBlack"
              className="text-white rounded-xl gap-x-2 shrink-0 px-12 py-8"
            >
              Hablemos de tu marca
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

export default ElevaTuMarca;
