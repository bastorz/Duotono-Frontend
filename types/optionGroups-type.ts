
export interface CustomFields {
    Price: number
}

export interface Options {
    name: string
    customFields: CustomFields
}

export interface optionGroup {
    name: string
    options: Options
  }

export interface optionGroups {
    name: string
    options: Options[]
}