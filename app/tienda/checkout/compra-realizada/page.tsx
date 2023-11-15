"use client"

import { Button } from "@/components/ui/button"
import { BookCheck, Check, Home, UserSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Page = () => {

  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-20">
      <div className="flex items-center justify-center">
        <span className="bg-first rounded-full">
          <Check className="w-12 h-12 p-2"/>
        </span>
      <div className="h-[4px] bg-first w-48"></div>
        <span className="bg-first rounded-full">
          <UserSquare className="w-12 h-12 p-2"/>
        </span>
      <div className="h-[4px] bg-first w-48"></div>
        <span className="bg-first rounded-full">
          <BookCheck className="w-12 h-12 p-2"/>
        </span>
      </div>
      <div className="flex flex-col space-y-4 items-center">
        <p className="font-semibold text-xl">Documento enviado</p>
        <Image src="/success.png" width={400} height={400} alt={""}/>
        <Link href="/tienda">
        <Button className='w-60 font-semibold flex items-center'>
          <Home className="w-5 h-5 mr-2"/>
          <p className='text-[16px]'>Volver a la tienda</p>
        </Button>
      </Link>
      </div>

    </div>
  )
}

export default Page