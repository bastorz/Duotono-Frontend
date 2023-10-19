"use client"

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ConoceNuestrosServicios from "@/components/servicios-de-diseno/conoce-nuestros-servicios";
import ConquistaElMundo from "@/components/servicios-de-diseno/conquista-el-mundo";
import DisenoDePackaging from "@/components/servicios-de-diseno/diseno-de-packaging";
import ElevaTuMarca from "@/components/servicios-de-diseno/eleva-tu-marca";
import TuEmpresaBrille from "@/components/servicios-de-diseno/tu-empresa-brille";

export default function Home() {
    return (
        <>
          <Navbar/>
          <ConoceNuestrosServicios/>
          <ElevaTuMarca/>
          <TuEmpresaBrille/>
          <ConquistaElMundo/>
          <DisenoDePackaging/>
          <Footer/>
        </>
    );
}
