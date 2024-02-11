import axios from "axios"
import { useEffect, useState } from "react"
import { Pokemon } from "../interfaces/Pokemon"

const useSearchPokemon = (idOrName: string | number): {searchedPoke: Pokemon, isLoading: boolean, error: Error | null} => {
  const [searchedPoke, setSearchedPoke] = useState<Pokemon>({
    id: 0,
    name: '',
    imageUrl: '',
    gifUrl: '',
    baseExperience: 0,
    height: 0,
    weight: 0,
    abilities: [],
    types: []
  })
  
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${idOrName}`).then((response) => {
      let imageUrl = response.data.sprites.other["official-artwork"].front_default
      if(imageUrl === null){
          imageUrl = response.data.sprites.front_default
      }
      const gifUrl = response.data.sprites.other.showdown.front_default
      
      const abilities = response.data.abilities.map((ab: { ability: { name: string } }) => ab.ability.name)
      const types = response.data.types.map((ty: { type: { name: string } }) => ty.type.name)
      
      setSearchedPoke({
          id: response.data.id,
          name: response.data.name,
          imageUrl,
          gifUrl,
          baseExperience: response.data.base_experience,
          height: response.data.height,
          weight: response.data.weight,
          abilities,
          types
      })
      setIsLoading(false)
    }).catch((error) => {
      setError(error)
      setIsLoading(false)
    })
  }, [idOrName])

  return {searchedPoke, isLoading, error}
}

export default useSearchPokemon
