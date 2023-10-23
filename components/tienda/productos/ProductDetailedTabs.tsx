import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Circle } from "lucide-react"

export const ProductDetailedTabs = () => {
    return (
        <Tabs defaultValue="description" className="w-full py-2">
        <TabsList className="flex space-x-4">
            <TabsTrigger value="description" className="active-tabs">Descripción</TabsTrigger>
          <TabsTrigger value="product" className="active-tabs">Especificaciones del producto</TabsTrigger>
          <TabsTrigger value="design" className="active-tabs">Normas de diseño</TabsTrigger>
          <TabsTrigger value="order" className="active-tabs">Proceso de pedido</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="py-2 space-y-2">
          <div className="flex items-center space-x-2 text-white">
            <Circle className="h-3 w-3" fill="white"/>
            <p>Esto es un mensaje de descripcion de prueba</p>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Circle className="h-3 w-3" fill="white"/>
            <p>Esto es un mensaje de descripcion de prueba</p>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Circle className="h-3 w-3" fill="white"/>
            <p>Esto es un mensaje de descripcion de prueba</p>
          </div>
        </TabsContent>
        <TabsContent value="product" className="py-2 space-y-2">
        <div className="flex items-center space-x-2 text-white">
            <Circle className="h-3 w-3" fill="white"/>
            <p>Esto es un mensaje de descripcion de prueba</p>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Circle className="h-3 w-3" fill="white"/>
            <p>Esto es un mensaje de descripcion de prueba</p>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Circle className="h-3 w-3" fill="white"/>
            <p>Esto es un mensaje de descripcion de prueba</p>
          </div>
        </TabsContent>
        <TabsContent value="design" className="py-2 space-y-2">
        <div className="flex items-center space-x-2 text-white">
            <Circle className="h-3 w-3" fill="white"/>
            <p>Esto es un mensaje de descripcion de prueba</p>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Circle className="h-3 w-3" fill="white"/>
            <p>Esto es un mensaje de descripcion de prueba</p>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Circle className="h-3 w-3" fill="white"/>
            <p>Esto es un mensaje de descripcion de prueba</p>
          </div>
        </TabsContent>
        <TabsContent value="order" className="py-2 space-y-2">
        <div className="flex items-center space-x-2 text-white">
            <Circle className="h-3 w-3" fill="white"/>
            <p>Esto es un mensaje de descripcion de prueba</p>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Circle className="h-3 w-3" fill="white"/>
            <p>Esto es un mensaje de descripcion de prueba</p>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Circle className="h-3 w-3" fill="white"/>
            <p>Esto es un mensaje de descripcion de prueba</p>
          </div>
        </TabsContent>
      </Tabs>
    )
}