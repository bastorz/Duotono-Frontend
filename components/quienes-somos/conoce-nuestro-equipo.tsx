import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import { Button } from '../ui/button';

const ConoceNuestroEquipo = () => {
  const teamLogos = [
    {
      label: 'Instagram',
      icon: <Instagram />,
      href: 'https://www.instagram.com/duotonodesign/?hl=es',
    },
    {
      label: 'Facebook',
      icon: <Facebook fill="#000000" />,
      href: 'https://www.facebook.com/duotonodesign2/?locale=es_ES',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-20 px-4 xl:px-0">
      <p className="font-semibold text-lg text-center xl:text-left">
        Nosotras estamos aquí!
      </p>
      <h3 className="text-5xl font-bold pb-4 text-center xl:text-left">
        Conoce a nuestro equipo
      </h3>
      <p className="text-xl text-[#000000] text-center max-w-3xl">
        Nuestra filosofía es simple: contratar un equipo diverso y apasionado y
        fomentar una cultura que te empodere para hacer tu mejor trabajo.
      </p>
      <div className="flex flex-col xl:flex-row space-y-8 xl:space-y-0 space-x-0 xl:space-x-6 items-center justify-center xl:justify-start ">
        <Link href="/servicios-de-diseno" target="_blank">
          {' '}
          <Button
            variant="ghost"
            className="rounded-xl gap-x-2 shrink-0   border border-black px-10"
          >
            Conoce nuestros servicios
          </Button>
        </Link>
        <Link href="/contacto" target="_blank">
          <Button
            variant="default"
            className="bg-first rounded-xl gap-x-2 shrink-0   px-20"
          >
            Te ayudamos
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 place-items-center place-content-center gap-x-20 py-8 gap-y-10 xl:gap-y-0">
        <div className="flex flex-col items-center justify-center py-10 px-8 rounded-xl space-y-3">
          <Image
            src="/Maria-Francia.jpeg"
            alt="19"
            width={70}
            height={70}
            className="bg-[#ffffff] rounded-full w-18 h-18"
          />
          <h5 className="font-bold">María Francia Domínguez</h5>
          <h6 className="font-semibold">Directora de Arte</h6>
          <p className="max-w-[200px] text-center">
            El arte y la creatividad tienen el poder de provocar emociones y
            generar un impacto duradero.
          </p>
          <div className="flex space-x-4 pt-4">
            <Image
              src="/maria-francia-qr.jpeg"
              alt="19"
              width={70}
              height={70}
              className="w-18 h-18"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between py-10 px-8 rounded-full space-y-3">
          <Image
            src="/Elisabeth.jpeg"
            alt="19"
            width={70}
            height={70}
            className="bg-[#ffffff] rounded-full w-18 h-18"
          />
          <h5 className="font-bold">Elizabeth Sterling</h5>
          <h6 className="font-semibold">Administración</h6>
          <p className="max-w-[200px] text-center">
            Con un liderazgo colaborativo y una visión estratégica, nos
            impulsaremos hacia un futuro prometedor y lleno de éxitos.
          </p>
          <div className="flex space-x-4 pt-4">
            <Image
              src="/elizabeth-qr.jpeg"
              alt="19"
              width={70}
              height={70}
              className="w-18 h-18"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-10 px-8 rounded-xl space-y-3">
          <Image
            src="/Carolina.jpeg"
            alt="19"
            width={70}
            height={70}
            className="bg-[#ffffff] rounded-full w-18 h-18"
          />
          <h5 className="font-bold">Carolina Becerra</h5>
          <h6 className="font-semibold">Producción</h6>
          <p className="max-w-[200px] text-center">
            Me aseguro de que cada proyecto se realice con altos estándares de
            excelencia, desde la conceptualización hasta la entrega final.
          </p>
          <div className="flex space-x-4 pt-4">
            <Image
              src="/carolina-qr.jpeg"
              alt="19"
              width={70}
              height={70}
              className="w-18 h-18"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-10 px-8 rounded-xl space-y-3">
          <Image
            src="/Alejandra.jpeg"
            alt="19"
            width={70}
            height={70}
            className="bg-[#ffffff] rounded-full w-18 h-18"
          />
          <h5 className="font-bold">Alejandra Arismendi</h5>
          <h6 className="font-semibold">Producción</h6>
          <p className="max-w-[200px] text-center">
            Para mi, la calidad y la entrega en tiempo y forma de nuestros
            productos debe ser un aspecto fundamental en todo lo que hacemos.
          </p>
          <div className="flex space-x-4 pt-4">
            <Image
              src="/alejandra-qr.jpeg"
              alt="19"
              width={70}
              height={70}
              className="w-18 h-18"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConoceNuestroEquipo;
