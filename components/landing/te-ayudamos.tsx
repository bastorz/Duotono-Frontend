import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const TeAyudamos = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full place-items-center">
      <div className="mt-10 xl:my-20 mx-10 xl:mx-0 space-y-8">
        <h1 className="font-bold text-5xl xl:text-7xl max-w-2xl text-center xl:text-left">
          Te ayudamos con tu impresión digital
        </h1>
        <p className="text-black/80 max-w-[600px] text-center xl:text-left">
          Eleva tu marca con la más alta calidad en impresión digital.
          Precisión, rapidez y confiabilidad. ¡Haz que tu proyecto destaque!
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
              Solicitar presupuesto
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-20 mb-0 xl:my-20 bg-first w-full xl:w-auto flex items-center justify-center">
        <Image
          src="/5.png"
          alt="5"
          width={700}
          height={700}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default TeAyudamos;
