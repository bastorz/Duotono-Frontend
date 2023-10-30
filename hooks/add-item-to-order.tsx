import { getClient } from "@/lib/client";
import { AddItemToOrder } from "@/queries/add-item-to-cart.mutation";

export async function addItemToOrder(totalPrice: number, variantId: string, quantity: number ) {
    try {
      const data = await getClient().query({
        query: AddItemToOrder,
        variables: {
            totalPrice: totalPrice,
            variantId: variantId,
            quantity: quantity
        }
      });
    } catch (error) {
      console.error(error)
      return [];
    }
  }