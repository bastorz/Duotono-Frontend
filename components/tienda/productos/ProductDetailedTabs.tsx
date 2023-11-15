import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Circle } from "lucide-react"

interface Props {
  description: string | undefined,
  specifications: string | undefined,
  designRules: string | undefined,
  orderProcess: string | undefined
}

export const ProductDetailedTabs:React.FC<Props> = ({
  description,
  specifications,
  orderProcess,
  designRules,
}) => {
    return (
        <Tabs defaultValue="description" className="w-full py-2 hidden xl:flex flex-col">
        <TabsList className="flex space-x-4">
          <TabsTrigger value="description" className="w-[250px]">Descripción</TabsTrigger>
          <TabsTrigger value="product" className="w-[250px]">Especificaciones del producto</TabsTrigger>
          <TabsTrigger value="design" className="w-[250px]">Normas de diseño</TabsTrigger>
          <TabsTrigger value="order" className="w-[250px]">Proceso de pedido</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="py-2 space-y-2 pt-6">
          <div className="flex items-center space-x-2 text-white">
            <p className="max-w-2xl">{description}</p>
          </div>
        </TabsContent>
        <TabsContent value="product" className="py-2 space-y-2 pt-6">
        <div className="flex items-center space-x-2 text-white">
            <p className="max-w-2xl">{specifications}</p>
          </div>
        </TabsContent>
        <TabsContent value="design" className="py-2 space-y-2 pt-6">
        <div className="flex items-center space-x-2 text-white">
            <p className="max-w-2xl">{orderProcess}</p>
          </div>
        </TabsContent>
        <TabsContent value="order" className="py-2 space-y-2 pt-6">
        <div className="flex items-center space-x-2 text-white">
            <p className="max-w-2xl">{designRules}</p>
          </div>
        </TabsContent>
      </Tabs>
    )
}