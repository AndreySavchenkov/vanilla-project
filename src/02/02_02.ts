export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HouseType = {
    buildedAd: number
    repaired: boolean
    address: AddressType
}

export type GovermentBuildingType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    govermentBuildings: Array<GovermentBuildingType>
    citizensNumber: number
}