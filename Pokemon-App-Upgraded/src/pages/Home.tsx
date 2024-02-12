import { type ReactElement, useState } from 'react' // Previous API
// import { usePokemons } from '../data/usePokemons' // Previous API
import PokeImage from '../components/PokeImage'
import { useNavigate } from 'react-router-dom'
import { capitalisedFirstLetter } from '../utils/string-utils'
// import FetchingOffsetContext from '../contexts/FetchingOffsetContext' // Previous API
import { Pokemon } from '../interfaces/Pokemon'
import Pagination from '../components/Pagination'
import { useMyPokemonApi } from '../data/useMyPokemonApi'
import axios from 'axios'

const handleDelete = (id: number) => {
  const confirmDelete = confirm('Are you sure you want to delete?')
  if (confirmDelete) {
    axios.delete(`http://localhost:8080/api/pokemons/delete/${id}`).then((response) => {
      console.log(response);

      if (response.data?.id) {
        alert(response.data.name + ' deleted successfully!')
      }
    })
  }
}

const Home = (): ReactElement => {
  const [pages, setPages] = useState<number[]>([0, 1, 2])

  // console.log('From Home:',Date.now());
  // const { fetchingOffset } = useContext(FetchingOffsetContext) // Previous API
  const fetchingLimit = 10
  // const { pokemons, isLoading, error } = usePokemons(fetchingLimit, fetchingOffset) // Previous API
  const { pokemons, isLoading, error } = useMyPokemonApi()
  // console.log('Pokemons:', pokemons);
  // console.log('IsLoading:', isLoading);
  // console.log('Error:', error);
  const navigate = useNavigate()

  // useEffect(() => {
  //   setFetchingOffset(pages[1] * fetchingLimit)
  // }, [pages, setFetchingOffset])

  return (
    <>
      <div className='container'>
        {
          error !== null
            ? (<div className='card'>{error.message}</div>)
            : isLoading
              ? <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>

              : pokemons.sort((p1: Pokemon, p2: Pokemon) => (p1.id - p2.id)).map((pokemon: Pokemon) => {
                return <div className='card' key={pokemon.id}>
                  <PokeImage url={pokemon.imageUrl} name={pokemon.name} />
                  <h2 onClick={() => { navigate(`${pokemon.id}`) }}
                    className='underline p-2 rounded-md hover:bg-blue-500'>
                    {capitalisedFirstLetter(pokemon.name)}
                  </h2>

                  <input type='button'
                    value={'Delete'}
                    onClick={() => {
                      handleDelete(pokemon.id)
                    }}
                    className='mt-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' />
                </div>
              })
        }
      </div>
      <Pagination pages={pages} setPages={setPages} fetchingLimit={fetchingLimit} />
    </>
  )
}

export default Home
