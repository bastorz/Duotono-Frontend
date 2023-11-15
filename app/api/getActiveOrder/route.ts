import { getClient } from "@/lib/client";
import { GET_ACTIVE_ORDER } from "@/queries/get-active-order";

export async function GET() {
    try {
      const data = await fetchActiveOrder();
      return Response.json(data);
    } catch (error) {
      console.error(error);
      return Response.json({ error: "Internal Server Error" });
    }
  }
  
  async function fetchActiveOrder() {
    try {
      const data = await getClient().query({
        query: GET_ACTIVE_ORDER,
      });
      return data.data;
    } catch (error) {
      console.error(error);
      throw error; // rethrow the error to handle it in the calling function
    }
}