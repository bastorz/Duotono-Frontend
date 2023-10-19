"use client"

import Contacto from "@/components/contacto/contacto";
import PorDondeComenzar from "@/components/contacto/por-donde-comenzar";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function Home() {
    return (
        <>
          <Navbar/>
          <Contacto/>
          <PorDondeComenzar/>
          <Footer/>
        </>
    );
}
