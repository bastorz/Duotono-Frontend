'use client';

import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import LandingHero from '@/components/landing/landing-hero';
import ComoTrabajamos from '@/components/landing/como-trabajamos';
import PorqueNosotros from '@/components/landing/porque-nosotros';
import TeAyudamos from '@/components/landing/te-ayudamos';
import ProductosDestacados from '@/components/landing/productos-destacados';
import Banner from '@/components/landing/banner';

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <LandingHero />
      <ProductosDestacados />
      <ComoTrabajamos />
      <PorqueNosotros />
      <TeAyudamos />
      <Footer />
    </>
  );
}
