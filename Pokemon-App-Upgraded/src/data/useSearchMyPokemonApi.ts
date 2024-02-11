import axios from "axios"
import { useEffect, useState } from "react"
import { MyApiPokemon } from "../interfaces/Pokemon"


const useSearchMyPokemonApi = (idOrName: string | number): {searchedPoke: MyApiPokemon, isLoading: boolean, error: Error | null} => {
    const [searchedPoke, setSearchedPoke] = useState<MyApiPokemon>({
        id: 0,
        name: '',
        imageUrl: '',
        baseExperience: 0,
    })
    
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState(null)

  useEffect(() => {
    const searchUrl = `http://localhost:8080/api/pokemons/${ isNaN(Number(idOrName)) ? 'search/' + idOrName : idOrName }`
    axios.get(searchUrl).then((response) => {
        setSearchedPoke({
            id: response.data.id,
            name: response.data.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.data.id}.png`,
            baseExperience: response.data.baseExperience
        })
        setIsLoading(false)
    }).catch((error) => {
    setError(error)
    setIsLoading(false)
    })
  }, [idOrName])

  return {searchedPoke, isLoading, error}
}

export default useSearchMyPokemonApi
