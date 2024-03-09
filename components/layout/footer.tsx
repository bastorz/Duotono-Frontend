import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const logos = [
    {
      label: 'Facebook',
      icon: <Facebook fill="#000000" />,
      href: 'https://www.facebook.com/duotonodesign2/',
    },

    {
      label: 'Instagram',
      icon: <Instagram />,
      href: 'https://www.instagram.com/duotonodesign/',
    },
  ];

  // Create a new Date object
  const currentDate = new Date();

  // Get the current year
  const currentYear = currentDate.getFullYear();

  return (
    <div className="w-full pt-20 pb-10 px-8 xl:px-20 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 place-items-center xl:place-items-start">
        <div className="flex flex-col items-center gap-y-10">
          <Link href="/" className="">
            <Image
              src="/logo_nuevo_amarillo.png"
              alt="Duotono Logo"
              width={200}
              height={200}
            />
          </Link>
          <p className="text-white text-lg text-center">
            ¡Resalta con Duotono! Expande tu marca gracias a la impresión
            digital.
          </p>
          <div className="flex space-x-3 items-center justify-center xl:justify-start">
            {logos.map((logo) => (
              <Link
                key={logo.label}
                href={logo.href}
                className="bg-first w-10 h-10 rounded-xl flex items-center justify-center"
              >
                {logo.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col xl:items-start items-center space-y-2 ml-0 xl:ml-40 mt-10 mb-6 xl:my-0">
          <h4 className="text-white text-xl font-semibold mb-2 xl:mb-5">
            Productos
          </h4>
          <Link
            href="/tienda/categorias/papeleria-y-oficina"
            className="text-white"
          >
            Papelería y oficina
          </Link>
          <Link
            href="/tienda/categorias/publicidad-y-exterior"
            className="text-white"
          >
            Publicidad y exterior
          </Link>
          <Link
            href="/tienda/categorias/ropa-y-accesorios"
            className="text-white"
          >
            Ropa y accesorios
          </Link>
          <Link
            href="/tienda/categorias/decoracion-y-regalos"
            className="text-white"
          >
            Decoración y regalos
          </Link>
          <Link
            href="/tienda/categorias/empaques-y-presentacion"
            className="text-white"
          >
            Empaques y presentación
          </Link>
          <Link
            href="/tienda/categorias/grandes-formatos"
            className="text-white"
          >
            Grandes formatos
          </Link>
        </div>
        <div className="flex flex-col xl:items-start items-center space-y-2 ml-0 xl:ml-40 mt-10 mb-6 xl:my-0">
          <h4 className="text-white text-xl font-semibold mb-2 xl:mb-5">
            Nuestros servicios
          </h4>
          <Link href="/servicios-de-diseno" className="text-white">
            Impresión digital
          </Link>
          <Link href="/servicios-de-diseno" className="text-white">
            Branding
          </Link>
          <Link href="/servicios-de-diseno" className="text-white">
            Imagen corporativa
          </Link>
          <Link href="/servicios-de-diseno" className="text-white">
            Diseño redes sociales
          </Link>
        </div>
        <div className="flex flex-col xl:items-start items-center space-y-2 ml-0 xl:ml-40 mt-10 mb-6 xl:my-0">
          <h4 className="text-white text-xl font-semibold mb-2 xl:mb-5">
            Duotono
          </h4>
          <Link href="/quienes-somos" className="text-white">
            Sobre nosotro
          </Link>
          <Link href="/contacto" className="text-white">
            Contáctanos
          </Link>
          <Link
            href="https://www.google.com/maps?rlz=1C1UEAD_esES1071ES1071&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxiKBTIJCAAQIxgnGIoFMg0IARAuGK8BGMcBGIAEMgYIAhBFGEEyBggDEEUYQTIGCAQQRRg8MgYIBRBFGEHSAQgyNTIwajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=es&sa=X&geocode=KQvRxDYTf2oMMdQ2gwfjQEyf&daddr=C.+la+Carreta,+20,+38400+Puerto+de+la+Cruz,+Santa+Cruz+de+Tenerife"
            className="text-white"
          >
            Ubicación
          </Link>
        </div>
        {/* <div className="flex flex-col xl:items-start items-center space-y-2 ml-0 xl:ml-40 mt-10 mb-6 xl:my-0">
                    <h4 className="text-white text-xl font-semibold mb-2 xl:mb-5">Soporte</h4>
                    <Link href="/" className="text-white">Preguntas frecuentes</Link>
                    <Link href="/" className="text-white">Centro de ayuda</Link>
                </div> */}
      </div>
      <div className="flex flex-col space-y-10 mx-0 xl:mx-20">
        <div className="w-full h-[1px] bg-terciary"></div>
        <p className="text-white text-lg text-center">
          Copyright © {currentYear} Duotono Design | Todos los derechos
          reservados
        </p>
      </div>
    </div>
  );
};

export default Footer;
