export interface Pokemon{
    id: number
    name: string
    imageUrl: string
    gifUrl: string
    baseExperience: number
    height: number
    weight: number
    abilities: string[]
    types: string[]
}

export interface MyApiPokemon{
    id: number
    name: string
    imageUrl: string
    baseExperience: number
}