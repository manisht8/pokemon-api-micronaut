import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const handleAddPokemon = () => {
    const id = document.getElementById('id') as HTMLInputElement
    const name = document.getElementById('name') as HTMLInputElement
    const baseExp = document.getElementById('baseExp') as HTMLInputElement

    const newPoke = {
        id: id.value,
        name: name.value,
        baseExperience: baseExp.value
    }

    axios.post('http://localhost:8080/api/pokemons', newPoke).then((response) => {
        console.log(response)
    }).catch((error) => {
        alert(error)
    })
}

const AddPokemon = () => {
    const navigate = useNavigate()
    return (
        <div>
            <form className="max-w-sm mx-auto" method='post'>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
                    <input type="number" id='id' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" id='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Base Experience</label>
                    <input type="number" id='baseExp' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <button type="button" onClick={() => {
                    handleAddPokemon()
                    navigate('/')
                }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default AddPokemon
