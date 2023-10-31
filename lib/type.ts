export interface OrderPartial {
    id: string;
    totalQuantity: number;
    totalWithTax: number;
    currencyCode: string;
    lines: Array<{
      id: string;
      unitPriceWithTax: number;
      quantity: number;
      linePriceWithTax: number;
      featuredAsset: {
        id: string;
        preview: string;
      };
      productVariant: {
        id: string;
        name: string;
        description: string;
      };
    }>;
  }
  