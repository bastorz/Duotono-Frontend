"use client"

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ConoceNuestroEquipo from "@/components/quienes-somos/conoce-nuestro-equipo";
import GoogleMaps from "@/components/quienes-somos/google-maps";
import QuienesSomosHero from "@/components/quienes-somos/quienes-somos-hero";
import QuienesSomosSubHero from "@/components/quienes-somos/quienes-somos-sub-hero";


export default function Home() {
    return (
        <>
          <Navbar/>
          <QuienesSomosHero/>
          <QuienesSomosSubHero/>
          <ConoceNuestroEquipo/>
          <GoogleMaps/>
          <Footer/>
        </>
    );
}
