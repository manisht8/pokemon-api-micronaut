import axios from "axios"
import { useEffect, useState } from "react"
import { Pokemon } from "../interfaces/Pokemon"

export const useMyPokemonApi = (): { pokemons: Pokemon[], isLoading: boolean, error: Error | null } => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      axios.get(`http://localhost:8080/api/pokemons`).then((response) => {
        const pokes: Pokemon[] = response.data.map((poke: Pokemon) => ({ 
            id: poke.id, 
            name: poke.name, 
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}))
        setPokemons(pokes)
        setIsLoading(false)
      }).catch((error) => {
        setError(error)
        setIsLoading(false)
      })
    }, [])
  
    return { pokemons, isLoading, error }
  }