export interface Data {
    collections: Collections
}

export interface Collections {
    items: Array<Items>
}

export interface Items {
    id: string,
    name: string,
    slug: string
    children: Children
}

export interface Children {
    name: string,
}

export interface CollectionResult {
    collection: Collection
}

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