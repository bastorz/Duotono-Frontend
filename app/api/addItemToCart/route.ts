import { addItemToOrder } from "@/hooks/add-item-to-order";

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const totalPrice = body.totalPrice;
    const variantId = body.variantId;
    const quantity = body.quantity;
    const cart = await addItemToOrder(totalPrice, variantId, quantity ) 
  } catch (error) {
    console.error('An error occurred: ', error);
    return Response.json({ error: 'An error occurred' }, { status: 500 });
  }
    return Response.json("success")
  }

