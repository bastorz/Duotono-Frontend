'use client'

import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <Navbar/>
         {children}
        <Footer/>
      </section>
    )
  }