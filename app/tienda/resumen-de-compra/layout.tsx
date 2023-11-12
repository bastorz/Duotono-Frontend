'use client'

import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"
import { ProductPageBanner } from "@/components/tienda/productos/productPageBanner"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {children}
        <ProductPageBanner/>
      </section>
    )
  }