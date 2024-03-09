import Image from 'next/image';
import CountUp from 'react-countup';

const QuienesSomosSubHero = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full place-items-center bg-black px-0 xl:px-10 2xl:px-20">
      <div className="my-0 xl:my-20">
        <Image
          src="/contacta_con_nosotros.jpg"
          alt="6"
          width={700}
          height={700}
          className="bg-white xl:bg-first w-[1100px] xl:w-[700px]"
        />
      </div>
      <div className="flex flex-col space-y-10 items-center xl:items-start h-full xl:py-32 py-14 px-2 xl:px-0">
        <p className="text-white max-w-[600px] text-center xl:text-left  px-4 xl:px-0 font-semibold text-xl">
          Hemos ayudado a cientos de empresas.
        </p>
        <h2 className="font-bold text-3xl xl:text-5xl text-center xl:text-left text-white">
          Solo estamos comenzando nuestro viaje.
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-40 gap-y-24 pt-20">
          <div className="flex flex-col space-y-4">
            <h5 className="text-6xl font-bold text-white text-center xl:text-left">
              <CountUp end={400} duration={2} />+
            </h5>
            <p className="text-xl font-semibold text-white text-center xl:text-left">
              Proyectos completados
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h5 className="text-6xl font-bold text-white text-center xl:text-left">
              <CountUp end={200} duration={2} />+
            </h5>
            <p className="text-xl font-semibold text-white text-center xl:text-left">
              Clientes atendidos
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h5 className="text-6xl font-bold text-white text-center xl:text-left">
              <CountUp end={30} duration={2} />
            </h5>
            <p className="text-xl font-semibold text-white text-center xl:text-left">
              Empresas asesoradas
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h5 className="text-6xl font-bold text-white text-center xl:text-left">
              <CountUp end={1000} duration={2} />+
            </h5>
            <p className="text-xl font-semibold text-white text-center xl:text-left">
              Impresiones digitales
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomosSubHero;
