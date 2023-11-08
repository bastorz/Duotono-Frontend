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
        price: number,
        options: [{
          code: string
          name: string
        }]
      };
    }>;
  }
  
  export interface ProductVariantPartial {
    id: string;
    name: string;
    sku: string;
    stockLevel: string;
    currencyCode: string;
    price: number;
    priceWithTax: number;
  }
  
  export interface ProductData {
    product: {
      id: string
      name: string
      description: string
      optionGroups: [{
        name: string
        options: [{
          name: string
          customFields: {
            price: number
          }
        }]
      }]
      featuredAsset: {
        id: string
        preview: string
      }
      assets: {
        id: string,
        preview: string
      }
      variants: [{
        id: string,
        name: string,
        sku: string,
        stockLevel: string,
        price: number,
        priceWithTax: string,
        options: [{
          name: string
        }]
        featuredAsset: {
          id: string,
          preview: string
        }
        assets: {
          id: string,
          preview: string
        }
      }]
    };
    loading: boolean;
    error: any; 
  };

  export interface OrderData {
   activeOrder: {
    code: string,
    id: string,
    currencyCode: string,
    lines: [{
      id: string,
      quantity: number,
      unitPriceWithTax: number,
      productVariant: [{
        id: string,
        name: string,
        sku: string,
      }]
      featuredAsset: {
        id: string,
        preview: string
      }
    }]
    totalQuantity: number
    totalWithTax: number
   }
};

export interface SelectedOptions {
  [key: string]: {
    optionName: string;
    optionPrice: number;
  } | null;
}

