import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const PorDondeComenzar = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full place-items-center xl:px-32">
      <div className="my-20 order-2 xl:order-1">
        <Image
          src="/contacta_con_nosotros.jpg"
          alt="1"
          width={700}
          height={700}
          className="rounded-md"
        />
      </div>
      <div className="mt-10 xl:my-20 mx-10 xl:mx-0 space-y-8 order-1 xl:order-2">
        <h3 className="font-bold text-5xl xl:text-5xl max-w-2xl text-center xl:text-left">
          ¿No sabes por donde comenzar? Nosotros te ayudamos
        </h3>
        <p className="text-black max-w-[600px] text-center xl:text-left xl:text-lg">
          Desde el diseño inicial hasta la impresión final, guiamos cada paso de
          tu proyecto.
        </p>
        <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start xl:space-x-6 space-y-6 xl:space-y-0">
          <Link href="/contacto" target="_blank">
            <Button
              variant="default"
              className="bg-first rounded-xl gap-x-2 shrink-0 font-semibold px-10 py-6"
            >
              Te ayudamos
            </Button>
          </Link>
          <Link href="/tienda" target="_blank">
            <Button
              variant="ghost"
              className="rounded-xl gap-x-2 shrink-0 border border-black px-5 py-6"
            >
              Ver más productos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PorDondeComenzar;
