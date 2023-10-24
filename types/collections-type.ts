export interface Collection {
    id: string,
    name: string,
    slug: string
    description: string
}

export interface Asset {
    preview: string,
}

export interface Subcollection {
    name: string,
    slug: string,
    featuredAsset: Asset
    price: number
    discountPrice: number
    description: string
}

export interface Product {
    name: string,
    slug: string,
    featuredAsset: Asset
    price: number
    discountPrice: number
    description: string
}

export interface ProductList {
    product: Product
}