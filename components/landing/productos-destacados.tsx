import Image from 'next/image';
import React from 'react';
import { Carousel } from '../ui/carousel';
import Link from 'next/link';
import { useQuery } from '@/lib/use-query';
import { Collection } from '@/lib/type';
import { GET_COLLECTIONS_BY_SLUG } from '@/lib/document';

const ProductosDestacados = () => {
  const {
    data: collectionsData,
    loading,
    error,
  } = useQuery<Collection>(GET_COLLECTIONS_BY_SLUG, {
    slug: '',
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-10">
        <h2 className="font-bold text-5xl xl:text-7xl max-w-2xl text-center">
          Descubre nuestros productos
        </h2>
        <p className="text-black/80 max-w-[600px] text-center px-2">
          Expertos en impresión digital de alta calidad. Convierte tus diseños
          en obras maestras con tecnología avanzada y servicio personalizado.
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-5 place-items-center place-content-center w-full py-10 gap-y-5 lg:gap-y-10 xl:gap-y-0">
        <Link
          href="/tienda/productos/tarjeta-de-visita"
          className="flex flex-col items-center justify-center space-y-8"
        >
          <Image
            src="/qGabsxRQ.jpeg"
            alt="2"
            width={300}
            height={300}
            className="object-center max-w-[300px] transition-transform transform-gpu duration-300 hover:scale-110"
          />
          <p className="font-semibold text-xl">Tarjetas de visita</p>
        </Link>
        <Link
          href="/tienda"
          className="flex flex-col items-center justify-center space-y-8"
        >
          <Image
            src="/bolsa-de-tela.jpg"
            alt="2"
            width={300}
            height={300}
            className="object-center max-w-[300px] transition-transform transform-gpu duration-300 hover:scale-110"
          />
          <p className="font-semibold text-xl">Bolsa de Tela</p>
        </Link>
        <Link
          href="/tienda"
          className="flex flex-col items-center justify-center space-y-8"
        >
          <Image
            src="/camisetas-deportivas-poliester.jpeg"
            alt="2"
            width={300}
            height={300}
            className="object-center max-w-[300px] transition-transform transform-gpu duration-300 hover:scale-110"
          />
          <p className="font-semibold text-xl">
            Camiseta Deportiva de Poliester
          </p>
        </Link>
        <Link
          href="/tienda"
          className="flex flex-col items-center justify-center space-y-8"
        >
          <Image
            src="/taza.jpg"
            alt="2"
            width={300}
            height={300}
            className="object-center max-w-[300px] transition-transform transform-gpu duration-300 hover:scale-110"
          />
          <p className="font-semibold text-xl">Taza con Caja</p>
        </Link>
        <Link
          href="/tienda"
          className="flex flex-col items-center justify-center space-y-8 "
        >
          <Image
            src="/flyers-a4.jpg"
            alt="2"
            width={300}
            height={300}
            className="object-center max-w-[300px] transition-transform transform-gpu duration-300 hover:scale-110"
          />
          <p className="font-semibold text-xl">Flyers A4</p>
        </Link>
      </div>
    </>
  );
};

export default ProductosDestacados;
