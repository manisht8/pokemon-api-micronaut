import axios from "axios"
import { useEffect, useState } from "react"
import { Pokemon } from "../interfaces/Pokemon"

// const usePokemons = () => {
//     const pokemonsLimit = 10
//     const { fetchingOffset } = useContext(FetchingOffsetContext)
//     const {pokemons, setPokemons} = useContext(PokemonsContext)

//     const [isLoading, setIsLoading] = useState<boolean>(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         const pokes: Pokemon[] = []
//         for(let id=1; id <= pokemonsLimit; id++){
//             axios.get(`https://pokeapi.co/api/v2/pokemon/${id + fetchingOffset}`).then((response) => {
//                 let imageUrl = response.data.sprites.other["official-artwork"].front_default
//                 if(imageUrl === null){
//                     imageUrl = response.data.sprites.front_default
//                 }
//                 const gifUrl = response.data.sprites.other.showdown.front_default
                
//                 const abilities = response.data.abilities.map((ab: { ability: { name: string } }) => ab.ability.name)
//                 const types = response.data.types.map((ty: { type: { name: string } }) => ty.type.name)
                
//                 const pokemon: Pokemon = {
//                     id: response.data.id,
//                     name: response.data.name,
//                     imageUrl,
//                     gifUrl,
//                     baseExperience: response.data.base_experience,
//                     height: response.data.height,
//                     weight: response.data.weight,
//                     abilities,
//                     types
//                 }
//                 pokes.push(pokemon)
                
//                 if(pokes.length === 10){
//                     setPokemons(pokes)
//                     setIsLoading(false)
//                 }
//             }).catch((error) => {
//                 setError(error)
//                 setIsLoading(false)
//             })
//         }
//         // console.log('From API:',Date.now());
//     }, [fetchingOffset, setPokemons])
//     return {pokemons, isLoading, error}
// }

// export default usePokemons


export const usePokemons = (limit: number, offset: number): { pokemons: Pokemon[], isLoading: boolean, error: Error | null } => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState(null)
  // console.log('Limit:', limit);
  // console.log('Offset:', offset);
  

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`).then((response) => {
      const pokes: Pokemon[] = response.data.results.map((poke: Pokemon, index: number) => ({ 
          id: (offset + index + 1), 
          name: poke.name, 
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${(offset + index + 1)}.png`}))
      setPokemons(pokes)
      setIsLoading(false)
    }).catch((error) => {
      setError(error)
      setIsLoading(false)
    })
  }, [limit, offset])

  return { pokemons, isLoading, error }
}