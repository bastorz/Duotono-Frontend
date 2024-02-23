import Image from 'next/image';

const ConoceNuestrosServicios = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-6 py-20 px-4 xl:px-0">
        <p className="font-semibold text-lg text-center xl:text-left">
          Sobre nosotros
        </p>
        <h3 className="text-5xl font-bold pb-4 text-center xl:text-left">
          Duotono Design
        </h3>
        <p className="text-xl text-black/70 text-center max-w-3xl">
          Fusionamos la maestría y la tradición con la innovación digital,
          ofreciendo soluciones de impresión de vanguardia. Buscamos
          posicionarnos como líderes en la imprenta digital manteniendo vivo el
          arte de la impresión con la precisión del mundo digital.
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 place-items-center place-content-center py-8 gap-y-10 xl:gap-y-0 xl:px-64">
        <div className="bg-[#AEAEAE]/10 flex flex-col items-center justify-center xl:py-10 xl:px-8 rounded-xl space-y-2">
          <Image src="/branding.png" alt="19" width={250} height={250} />
          <h5 className="font-bold">Branding</h5>
        </div>
        <div className="bg-[#AEAEAE]/10 flex flex-col items-center justify-center xl:py-10 xl:px-8 rounded-xl space-y-2">
          <Image
            src="/imagen-corporativa.png"
            alt="19"
            width={250}
            height={250}
          />
          <h5 className="font-bold">Imagen corporativa</h5>
        </div>
        <div className="bg-[#AEAEAE]/10 flex flex-col items-center justify-center xl:py-10 xl:px-8 rounded-xl space-y-2">
          <Image src="/diseño-redes.png" alt="19" width={250} height={250} />
          <h5 className="font-bold">Diseño redes sociales</h5>
        </div>
        <div className="bg-[#AEAEAE]/10 flex flex-col items-center justify-center xl:py-10 xl:px-8 rounded-xl space-y-2">
          <Image src="/empaques.png" alt="19" width={250} height={250} />
          <h5 className="font-bold">Packaging</h5>
        </div>
      </div>
    </>
  );
};
export default ConoceNuestrosServicios;
