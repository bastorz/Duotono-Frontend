import Banner from "@/components/formato/banner"
import Format from "@/components/formato/format"
import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"
import { ProductPageBanner } from "@/components/tienda/productos/productPageBanner"


const Page = () =>{

    return (
        <>
            <Navbar/>
            <Banner/>
            <Format/>
            <ProductPageBanner/>
            <Footer/>
        </>
    )
}

export default Page
