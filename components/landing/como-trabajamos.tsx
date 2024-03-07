const ComoTrabajamos = () => {
  return (
    <div className="bg-first w-full py-10 mt-10 px-8 lg:px-0">
      <div className="flex flex-col space-y-4 w-full items-center justify-center">
        <p className="font-semibold">Sencillo y rápido</p>
        <h3 className="text-6xl font-semibold pb-4 text-center">
          ¿Cómo funciona?
        </h3>
        <p className="text-md md:text-lg max-w-2xl text-center font-semibold ">
          Sube tus ideas o co-diseña con expertos. Transformamos tus visiones en
          impresiones de alta calidad. Un proceso sencillo para resultados
          sorprendentes.
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 place-content-center place-items-center py-10 gap-y-10 xl:gap-y-0">
        <div className="flex flex-col items-center space-y-2">
          <div className="p-4 bg-white rounded-full px-6 flex items-center justify-center">
            <span className="font-bold text-xl">1</span>
          </div>
          <p className="font-bold">Elige un producto</p>
          <p className="max-w-lg text-center font-semibold xl:max-w-xs 2xl:max-w-lg">
            Recibe tus impresiones rápidamente con nuestro servicio de envío
            confiable. Entregamos calidad directo a tu puerta.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="p-4 bg-white rounded-full px-6 flex items-center justify-center">
            <span className="font-bold text-xl">2</span>
          </div>
          <p className="font-bold">Sube o crea un diseño con nosotros</p>
          <p className="max-w-lg text-center font-semibold xl:max-w-xs 2xl:max-w-lg">
            Trabaja mano a mano con nuestros especialistas en diseño para
            obtener impresiones impactantes.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="p-4 bg-white rounded-full px-6 flex items-center justify-center">
            <span className="font-bold text-xl">3</span>
          </div>
          <p className="font-bold">Solicita el producto</p>
          <p className="max-w-lg text-center font-semibold xl:max-w-xs 2xl:max-w-lg">
            Elige, personaliza y ordena con facilidad. Garantizamos una
            experiencia de compra intuitiva y productos de primera.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComoTrabajamos;
